"""Import answer letters from the authorized archive, matching local statements."""

import importlib.util
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("statements", ROOT / "scripts/import-statements.py")
statements = importlib.util.module_from_spec(spec)
spec.loader.exec_module(statements)


def import_answers():
    answers = {}
    sources = {}
    for year in range(2016, 2026):
        for variant in ("A", "B"):
            paper = f"{year}{variant}"
            source = f"{statements.ORIGIN}/past-contests/amc10/{paper}"
            page = statements.download(source).decode("utf-8")
            match = re.search(r'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', page, re.DOTALL)
            if not match:
                raise ValueError(f"{paper}: missing structured data")
            props = json.loads(match[1])["props"]["pageProps"]
            local = json.loads((ROOT / f"assets/exams/{paper}.json").read_text())
            questions = props["baseQuestions"]
            if props["contest"] != "amc10" or props["year"] != paper or len(questions) != 25:
                raise ValueError(f"{paper}: incorrect paper or question count")
            for number, question in enumerate(questions, 1):
                actual = local["problems"][number - 1]
                if (actual["problemNumber"] != number
                    or statements.statement_html(question["question"], {}, number) != actual["statementHtml"]
                    or [statements.statement_html(question[label], {}, number) for label in "abcde"] != actual["choices"]):
                    raise ValueError(f"{paper} #{number}: source does not match local statement and choices")
                answer = question["answer"]
                if answer not in list("abcde"):
                    raise ValueError(f"{paper} #{number}: invalid answer")
                answers[f"{year}-AMC10{variant}-{number}"] = answer.upper()
            sources[paper] = source
            print(f"Matched {paper}: 25 answers", flush=True)
    if len(answers) != 500:
        raise ValueError("Expected 500 unique answer entries")
    (ROOT / "assets/answer-key.json").write_text(
        json.dumps({"sourceName": "LIVE by Po-Shen Loh", "sources": sources, "answers": answers}, indent=2) + "\n"
    )


if __name__ == "__main__":
    import_answers()
