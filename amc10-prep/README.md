# AMC 10 Prep

Run from this folder with `python3 -m http.server 8000 --bind 127.0.0.1`,
then open http://127.0.0.1:8000. No dependencies need to be installed.
Math rendering uses MathJax from a CDN and requires internet access.
The theme toggle at the top shows a moon to switch to dark appearance and a sun
to switch to light appearance, with a tooltip describing the action.
It follows your device preference until you choose a theme, then saves that choice
in this browser.

In **Problem Explorer**, use **By concept & filters** for the existing concept,
year, exam, and difficulty filters. Switch to **By year & exam** to select a
single paper (2016-2025, AMC 10A or AMC 10B) and browse all 25 problem references
in numerical order. Switching modes preserves each mode's selections.
Use **Full exam page** with the same year and exam selectors to read all 25
original English statements and A-E choices in one scrollable page, including
local diagrams. Answers and solutions are not imported or displayed.
Concept tags open the Study Guide; vocabulary links open the Glossary.
Problem cards use an external-link icon for the source problem and a book icon
for related vocabulary, with localized hover tooltips and accessible labels.
Shared topic-classification guidance appears once in the explorer header;
cards only show notes specific to that problem.

Each problem has a **My progress** panel, expanded by default and kept open
after selecting an option: **Need help understanding**,
**Understand, but need a starting point**, or **Understand and have a solution
approach**. Selections are saved in this browser, independently for each year,
exam, and problem number, and shared across reference cards and full exam pages.
They are not synced to other browsers or devices. Storage errors display a warning.
Use the **My progress** filter in any Problem Explorer mode to show one status,
**Not marked yet**, or **All statuses**. It combines with existing filters; year
and exam modes restrict results to the selected paper. To review a status across
all years and papers, use **By concept & filters** with its other filters set to
**All**. Changing a problem's status immediately updates the filtered list.

The **Progress overview** counts marked and unmarked problems within the selected
year and exam (all 500 references when both are set to All). Year/exam and full
exam modes use the selected paper. Concept, difficulty, and status filters do not
change these totals. Expand each status to see problem numbers grouped by year
and exam. The status filter shows counts for the same scope.
**Export progress (JSON)** downloads a snapshot with each problem's status
(`null` for unmarked), difficulty, and bilingual concept metadata for later
analysis across all years and exams, regardless of current filters. Nothing is
uploaded. Keep periodic exports to compare changes over
time: the app stores current selections, not historical status changes.
Concept tags are reference metadata; self-reported readiness is not a correctness
score or proof of mastery.

Statements and diagrams are sourced from [LIVE by Po-Shen Loh](https://live.poshenloh.com/past-contests).
AMC problems are copyright Mathematical Association of America. Importing and
redistributing this material requires permission from the relevant rights holders;
public availability alone is not a license. The user confirmed permission for
public redistribution and that on-page source credit is not required. The
on-page notice retains the MAA copyright; provenance remains in the imported data.
Run `npm run import:statements` to refresh the 2016-2025 AMC 10A/10B data using
Python 3 and internet access. The importer preserves the archive's displayed
paper order, strips non-content attributes, and downloads diagrams locally.
Reading imported statements does not contact the source site; MathJax still
loads from its CDN.

Run content checks with `npm test`.

The public site is https://ethanzyj.github.io/playground/. GitHub Pages serves
the root of the `gh-pages` branch, containing the contents of `amc10-prep`.
