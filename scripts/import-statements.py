"""Import authorized AMC 10 statements and diagrams without answers or solutions."""

import html
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.request import Request, urlopen


ORIGIN = "https://live.poshenloh.com"
OUTPUT = Path(__file__).resolve().parents[1] / "assets" / "exams"
MATH = re.compile(r"(\\\(.*?\\\)|\\\[.*?\\\])", re.DOTALL)
ALLOWED_TAGS = {
    "b", "strong", "i", "em", "u", "sub", "sup", "br", "p", "div", "span",
    "table", "thead", "tbody", "tr", "td", "th", "ul", "ol", "li",
}


def download(url):
    request = Request(url, headers={"User-Agent": "AMC10Prep-authorized-import/1.0"})
    with urlopen(request, timeout=45) as response:
        return response.read()


class StatementHTML(HTMLParser):
    def __init__(self, assets, problem_number):
        super().__init__(convert_charrefs=True)
        self.parts = []
        self.assets = assets
        self.problem_number = problem_number

    def handle_starttag(self, tag, attrs):
        if tag == "img":
            src = dict(attrs).get("src", "")
            if not re.fullmatch(r"/(?:images/past-contests/)?amc10/[0-9]{4}[AB]/[A-Za-z0-9_.-]+\.(?:svg|png|jpg|jpeg|webp)", src):
                raise ValueError(f"Unexpected diagram URL: {src}")
            path = src.removeprefix("/images/past-contests/").lstrip("/")
            self.assets[path] = f"{ORIGIN}/images/past-contests/{path}"
            self.parts.append(
                f'<img src="assets/exams/images/{path}" '
                f'alt="Diagram for problem {self.problem_number}" loading="lazy">'
            )
        elif tag in ALLOWED_TAGS:
            self.parts.append(f"<{tag}>")
        else:
            raise ValueError(f"Unexpected statement HTML tag: {tag}")

    def handle_endtag(self, tag):
        if tag in ALLOWED_TAGS and tag != "br":
            self.parts.append(f"</{tag}>")
        elif tag not in {"img", "br"}:
            raise ValueError(f"Unexpected closing HTML tag: {tag}")

    def handle_data(self, data):
        self.parts.append(html.escape(data, quote=False))


def statement_html(text, assets, problem_number):
    if not isinstance(text, str) or not text.strip():
        raise ValueError(f"Problem {problem_number} has missing statement or choices")
    parser = StatementHTML(assets, problem_number)
    # TeX comparisons such as a<b must not be interpreted as HTML tags.
    for index, segment in enumerate(MATH.split(text)):
        if index % 2:
            parser.parts.append(html.escape(segment, quote=False))
        else:
            parser.feed(segment)
    parser.close()
    return "".join(parser.parts)


def import_exams():
    exams = {}
    assets = {}
    for year in range(2016, 2026):
        for variant in ("A", "B"):
            paper = f"{year}{variant}"
            source_url = f"{ORIGIN}/past-contests/amc10/{paper}"
            page = download(source_url).decode("utf-8")
            match = re.search(r'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', page, re.DOTALL)
            if not match:
                raise ValueError(f"{paper}: missing structured exam data")
            props = json.loads(match[1])["props"]["pageProps"]
            questions = props["baseQuestions"]
            if props["contest"] != "amc10" or props["year"] != paper or len(questions) != 25:
                raise ValueError(f"{paper}: expected the selected exam with 25 questions")
            # The archive renders this array in paper order; its per-question
            # amc10ProblemNumber field is inconsistent on some papers.
            problems = [
                {
                    "problemNumber": number,
                    "statementHtml": statement_html(question["question"], assets, number),
                    "choices": [
                        statement_html(question[label], assets, number)
                        for label in ("a", "b", "c", "d", "e")
                    ],
                }
                for number, question in enumerate(questions, 1)
            ]
            exams[paper] = {
                "year": year,
                "exam": f"AMC 10{variant}",
                "sourceUrl": source_url,
                "sourceName": "LIVE by Po-Shen Loh",
                "problems": problems,
            }
            print(f"Read {paper}: 25 statements", flush=True)

    images = {}
    for path, url in assets.items():
        image = download(url)
        if not image:
            raise ValueError(f"Empty diagram: {url}")
        if path.endswith(".svg"):
            svg = image.decode("utf-8")
            if "<svg" not in svg or re.search(r"<(?:script|foreignObject)\b|\bon\w+\s*=", svg, re.IGNORECASE):
                raise ValueError(f"Unsupported SVG content: {url}")
        images[path] = image

    OUTPUT.mkdir(parents=True, exist_ok=True)
    for paper, exam in exams.items():
        (OUTPUT / f"{paper}.json").write_text(
            json.dumps(exam, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
    for path, content in images.items():
        target = OUTPUT / "images" / path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(content)
    print(f"Imported {len(exams)} exams, 500 statements, and {len(images)} diagrams.")


if __name__ == "__main__":
    import_exams()
