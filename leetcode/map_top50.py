#!/usr/bin/env python3
"""
Generate a mapping between questions/top50.xlsx and local problem files.

The script reads the Top 50 Excel file, derives the LeetCode slug from each row,
optionally queries LeetCode metadata for problem number and difficulty, then
matches each problem against the local problems/ directory.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import urllib.error
import urllib.request
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional

import pandas as pd


GRAPHQL_URL = "https://leetcode.com/graphql"
GRAPHQL_QUERY = """
query questionData($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionFrontendId
    difficulty
    title
    titleSlug
  }
}
""".strip()

DIFFICULTY_MAP = {
    "easy": "easy",
    "medium": "medium",
    "hard": "hard",
    "简单": "easy",
    "中等": "medium",
    "困难": "hard",
}


@dataclass
class LocalProblem:
    number: int
    slug: str
    difficulty: str
    relative_path: str


def normalize_difficulty(value: Optional[str]) -> str:
    if value is None:
        return ""
    text = str(value).strip().lower()
    if not text:
        return ""
    parts = [part.strip() for part in re.split(r"[,，]", text) if part.strip()]
    normalized = []
    for part in parts:
        mapped = DIFFICULTY_MAP.get(part.lower(), DIFFICULTY_MAP.get(part, ""))
        if mapped and mapped not in normalized:
            normalized.append(mapped)
    return ",".join(normalized)


def difficulty_label(value: str) -> str:
    reverse_map = {
        "easy": "easy",
        "medium": "medium",
        "hard": "hard",
    }
    return reverse_map.get(value, value)


def extract_slug(link: str) -> str:
    return str(link).strip().rstrip("/").split("/")[-1]


def index_local_problems(base_dir: Path) -> Dict[str, LocalProblem]:
    problems_dir = base_dir / "problems"
    indexed: Dict[str, LocalProblem] = {}
    pattern = re.compile(r"^(\d{4})_(.+)\.py$")

    for difficulty in ("easy", "medium", "hard"):
        diff_dir = problems_dir / difficulty
        if not diff_dir.exists():
            continue

        for file_path in diff_dir.glob("*.py"):
            match = pattern.match(file_path.name)
            if not match:
                continue
            indexed[match.group(2)] = LocalProblem(
                number=int(match.group(1)),
                slug=match.group(2),
                difficulty=difficulty,
                relative_path=str(file_path.relative_to(base_dir)).replace("\\", "/"),
            )

    return indexed


def fetch_problem_metadata(slug: str) -> Dict[str, str]:
    payload = json.dumps(
        {
            "query": GRAPHQL_QUERY,
            "variables": {"titleSlug": slug},
            "operationName": "questionData",
        }
    ).encode("utf-8")
    request = urllib.request.Request(
        GRAPHQL_URL,
        data=payload,
        headers={
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0",
        },
        method="POST",
    )

    with urllib.request.urlopen(request, timeout=15) as response:
        data = json.loads(response.read().decode("utf-8"))

    question = data.get("data", {}).get("question")
    if not question:
        raise ValueError(f"No metadata returned for slug: {slug}")

    return {
        "number": str(question["questionFrontendId"]),
        "difficulty": str(question["difficulty"]).lower(),
        "title": str(question["title"]),
        "slug": str(question["titleSlug"]),
    }


def choose_expected_difficulty(remote_difficulty: str, excel_difficulty: str) -> str:
    if remote_difficulty:
        return remote_difficulty
    if not excel_difficulty:
        return ""
    return excel_difficulty.split(",")[0]


def build_mapping(
    base_dir: Path,
    input_path: Path,
    sheet_name: str,
    use_remote: bool,
) -> pd.DataFrame:
    local_index = index_local_problems(base_dir)
    source = pd.read_excel(input_path, sheet_name=sheet_name)

    records: List[Dict[str, object]] = []
    remote_cache: Dict[str, Dict[str, str]] = {}

    for rank, (_, row) in enumerate(source.iterrows(), start=1):
        link = str(row.get("力扣链接", "")).strip()
        slug = extract_slug(link) if link else ""
        excel_title = str(row.get("题目名称(去重)", "")).strip()
        excel_difficulty = normalize_difficulty(row.get("难度(去重)"))
        local = local_index.get(slug)

        remote_number = ""
        remote_title = ""
        remote_difficulty = ""
        metadata_status = "not_requested"

        if use_remote and slug:
            try:
                if slug not in remote_cache:
                    remote_cache[slug] = fetch_problem_metadata(slug)
                remote = remote_cache[slug]
                remote_number = remote["number"]
                remote_title = remote["title"]
                remote_difficulty = remote["difficulty"]
                metadata_status = "ok"
            except (urllib.error.URLError, ValueError, TimeoutError) as exc:
                metadata_status = f"error: {exc}"

        expected_difficulty = choose_expected_difficulty(remote_difficulty, excel_difficulty)
        expected_number = remote_number or (f"{local.number:04d}" if local else "")
        expected_file = ""
        if expected_number and slug and expected_difficulty:
            expected_file = f"problems/{expected_difficulty}/{int(expected_number):04d}_{slug}.py"

        local_exists = local is not None
        local_difficulty = local.difficulty if local else ""
        local_number = f"{local.number:04d}" if local else ""
        local_file = local.relative_path if local else ""

        difficulty_match = bool(
            not remote_difficulty or not local_difficulty or remote_difficulty == local_difficulty
        )
        number_match = bool(
            not remote_number or not local_number or int(remote_number) == int(local_number)
        )
        excel_remote_match = bool(
            not remote_difficulty
            or not excel_difficulty
            or remote_difficulty in excel_difficulty.split(",")
        )

        if local_exists and difficulty_match and number_match:
            status = "done"
        elif local_exists:
            status = "needs_review"
        else:
            status = "missing"

        records.append(
            {
                "rank": rank,
                "slug": slug,
                "title_excel": excel_title,
                "title_remote": remote_title,
                "difficulty_excel": excel_difficulty,
                "difficulty_remote": remote_difficulty,
                "difficulty_local": local_difficulty,
                "difficulty_excel_matches_remote": excel_remote_match,
                "number_remote": remote_number,
                "number_local": local_number,
                "number_matches": number_match,
                "link": link,
                "expected_file": expected_file,
                "local_file": local_file,
                "local_exists": local_exists,
                "status": status,
                "metadata_status": metadata_status,
            }
        )

    return pd.DataFrame(records)


def build_summary(mapping: pd.DataFrame) -> pd.DataFrame:
    summary_rows = [
        {"metric": "total_rows", "value": int(len(mapping))},
        {"metric": "done", "value": int((mapping["status"] == "done").sum())},
        {"metric": "missing", "value": int((mapping["status"] == "missing").sum())},
        {
            "metric": "needs_review",
            "value": int((mapping["status"] == "needs_review").sum()),
        },
        {
            "metric": "metadata_errors",
            "value": int(mapping["metadata_status"].astype(str).str.startswith("error:").sum()),
        },
    ]
    return pd.DataFrame(summary_rows)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Map top50 questions to local problem files")
    parser.add_argument(
        "--input",
        default="questions/top50.xlsx",
        help="Input Excel file path (default: questions/top50.xlsx)",
    )
    parser.add_argument(
        "--sheet",
        default="top50",
        help="Input sheet name (default: top50)",
    )
    parser.add_argument(
        "--output",
        default="questions/top50_mapping.xlsx",
        help="Output Excel file path (default: questions/top50_mapping.xlsx)",
    )
    parser.add_argument(
        "--csv",
        default="questions/top50_mapping.csv",
        help="Output CSV file path (default: questions/top50_mapping.csv)",
    )
    parser.add_argument(
        "--skip-remote",
        action="store_true",
        help="Skip remote LeetCode metadata lookup",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    base_dir = Path(__file__).resolve().parent
    input_path = (base_dir / args.input).resolve()
    output_path = (base_dir / args.output).resolve()
    csv_path = (base_dir / args.csv).resolve()

    mapping = build_mapping(
        base_dir=base_dir,
        input_path=input_path,
        sheet_name=args.sheet,
        use_remote=not args.skip_remote,
    )
    summary = build_summary(mapping)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    csv_path.parent.mkdir(parents=True, exist_ok=True)

    with pd.ExcelWriter(output_path, engine="openpyxl") as writer:
        mapping.to_excel(writer, index=False, sheet_name="mapping")
        summary.to_excel(writer, index=False, sheet_name="summary")

    mapping.to_csv(csv_path, index=False, encoding="utf-8-sig")

    done = int((mapping["status"] == "done").sum())
    missing = int((mapping["status"] == "missing").sum())
    needs_review = int((mapping["status"] == "needs_review").sum())

    print(f"Input: {input_path}")
    print(f"Excel output: {output_path}")
    print(f"CSV output: {csv_path}")
    print(f"Done: {done}")
    print(f"Missing: {missing}")
    print(f"Needs review: {needs_review}")


if __name__ == "__main__":
    main()