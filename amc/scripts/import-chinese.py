"""Import authorized Chinese statements and choices, never hints or solutions."""

from concurrent.futures import ThreadPoolExecutor
import json
from pathlib import Path
import re
import runpy
import time


HELPERS = runpy.run_path(str(Path(__file__).with_name("import-statements.py")))
OUTPUT = HELPERS["OUTPUT"]
ORIGIN = HELPERS["ORIGIN"]


def import_question(task):
    paper, number, original = task
    url = f"{ORIGIN}/zh/past-contests/amc10/{paper}/problem/{number}"
    for attempt in range(3):
        try:
            page = HELPERS["download"](url).decode("utf-8")
            break
        except (OSError, TimeoutError):
            if attempt == 2:
                raise
            time.sleep(2 ** attempt)
    match = re.search(r'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', page, re.DOTALL)
    if not match:
        raise ValueError(f"{url}: missing structured data")
    props = json.loads(match[1])["props"]["pageProps"]
    if (props["contest"], props["year"], props["n"], props["locale"]) != ("amc10", paper, number, "zh"):
        raise ValueError(f"{url}: wrong problem identity")
    assets = {}
    base = props["baseQ"]
    if HELPERS["statement_html"](base["question"], assets, number) != original["statementHtml"]:
        raise ValueError(f"{url}: English statement differs from local problem")
    if [HELPERS["statement_html"](base[label], assets, number) for label in "abcde"] != original["choices"]:
        raise ValueError(f"{url}: English choices differ from local problem")
    translated = props["q"]
    if not re.search(r"[\u3400-\u9fff]", translated["question"]):
        raise ValueError(f"{url}: missing Chinese translation")
    statement = HELPERS["statement_html"](translated["question"], assets, number)
    choices = [HELPERS["statement_html"](translated[label], assets, number) for label in "abcde"]
    for asset in assets:
        if not (OUTPUT / "images" / asset).is_file():
            raise ValueError(f"{url}: missing local diagram {asset}")
    return paper, number, statement, choices


def main():
    exams = {path.stem: json.loads(path.read_text(encoding="utf-8"))
             for path in sorted(OUTPUT.glob("*.json"))}
    tasks = [(paper, question["problemNumber"], question)
             for paper, exam in exams.items() for question in exam["problems"]]
    if len(tasks) != 500:
        raise ValueError("Expected exactly 500 local problems")
    with ThreadPoolExecutor(max_workers=4) as pool:
        for count, (paper, number, statement, choices) in enumerate(pool.map(import_question, tasks), 1):
            question = exams[paper]["problems"][number - 1]
            question["statementZhHtml"] = statement
            question["choicesZh"] = choices
            if count % 25 == 0:
                print(f"Validated {count}/500 Chinese problems", flush=True)
    # Only persist after every identity, statement, choice, and diagram validates.
    for paper, exam in exams.items():
        exam["chineseSourceUrl"] = f"{ORIGIN}/zh/past-contests/amc10/{paper}"
        (OUTPUT / f"{paper}.json").write_text(
            json.dumps(exam, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Imported all 500 Chinese statements and 2,500 Chinese choices.", flush=True)


if __name__ == "__main__":
    main()
