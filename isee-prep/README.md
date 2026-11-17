# ISEE Prep

A bilingual (English / 中文) study site for the Independent School Entrance
Examination (ISEE), built with the same design, structure and sign-in as
`amc10-prep`. Published at https://ethanzyj.github.io/playground/isee/.

Run it from this folder with `python3 -m http.server 8000 --bind 127.0.0.1`
(or `npm run serve`), then open http://127.0.0.1:8000. There is nothing to
install or build: the site is plain ES modules. Math rendering uses MathJax from
a CDN and needs an internet connection. Tests need Node.js 20 or later
(`npm test`).

## Sign in (same accounts as AMC 10)

The site asks you to sign in first, with the **same username and password as
the AMC 10 site** (both use one Supabase project; see
[Accounts and cloud sync](#accounts-and-cloud-sync)). The language, theme and
level controls stay usable on the sign-in screen.

## Choose your level

The ISEE has three levels. The **Level** dropdown in the top bar (next to the
language switch) picks which one you are working on; **Middle Level** (grades
7–8) is the default and the choice is remembered. It controls everything on
every tab:

- **Study Guide**: only the concepts tested at that level (Lower has no
  quantitative comparisons, for example), with progress counts for that level.
- **Problem Explorer** and **Timed practice**: only that level's problems, at
  that level's official pace. The dropdown is locked while a timed test runs.
- **Glossary** and **Topic Map**: the shared math and reading terms plus that
  level's vocabulary words.
- **Essay practice**, the **exam facts** card and the **official sample test
  links** follow the level too.

Links can pick a level directly (`?level=lower|middle|upper`); links to a
problem, term or concept switch to the level that contains it.

## Where the problems come from

Real ISEE test forms are **secure and are never released** by the test owner
(Enrollment Management Association, formerly ERB), so past ISEE exams from the
last ten years do not exist publicly and are not included here. Instead:

- All problems, passages, essay prompts, vocabulary and study notes were written
  for this site (original, not copied from any test or prep book). They follow
  the published ISEE blueprint: the sections, question types, item counts and
  timings for each level. Every answer key was re-solved independently, without
  the key, and matched.
- The site links to the official free resources (sample tests, "What to
  Expect" guides, preparation pages) from the **Official practice** block on the
  Problem Explorer tab. Use those for the closest-to-real experience; they are
  copyrighted, so they are linked, not copied.
- Difficulty labels, level emphasis and pacing advice are study aids, not
  official statements.

## What is included

At a glance: **417 practice problems** (Lower 84, **Middle 222**, Upper 111,
with 15 reading passages), **38 study concepts**, **846 glossary entries** (459
vocabulary words) and **15 essay prompts**. Middle Level has the deepest bank:
222 problems, more than the 160 questions of one real test.

| Area | Content |
| --- | --- |
| **Study Guide** | Exam overview and strategy, then one lesson per topic: Verbal Reasoning, Quantitative Reasoning, Reading Comprehension, Mathematics Achievement and the Essay. Each concept has key points, formulas, steps, a worked example and a self-check list, in English and Chinese. |
| **Problem Explorer** | Original multiple-choice practice: synonyms, sentence completions, quantitative word problems, quantitative comparisons (Middle/Upper), reading passages with questions, and Mathematics Achievement. Filter by section, type, difficulty, concept, answer status and review list. Every problem has a bilingual explanation. |
| **Timed practice** | A test mode that uses the real ISEE pace for the chosen section (or a short mixed set). The deadline is wall-clock based, survives reloads, submits at zero, then shows a score, a breakdown by concept and the full explanations. Wrong answers are added to the review list. |
| **Essay practice** | Age-appropriate essay prompts for each level with a 30-minute writing timer, word count and autosaved drafts. The real essay is unscored and sent to schools, so there is no automatic grading. |
| **Glossary** | Math terms, vocabulary by level (with part of speech, example sentence and synonyms) and literary terms, searchable and filterable. Terms are linked inside lessons and explanations with hover/tap tooltips. |
| **Topic Map** | An overview of every topic, concept and linked vocabulary. |
| **Progress** | Mark concepts and vocabulary as mastered; tag each problem as "need help understanding", "need a starting point" or "have an approach"; answer history with accuracy by section; a Review collection (wrong answers are added automatically); and a JSON progress export (all levels). |

Other details: dark mode, an English/中文/bilingual switch, deep links
(`?concept=`, `?problem=`, `?term=`, `?view=`, `?level=`), and a layout that
works on phones.

## Accounts and cloud sync

Sign-in is shared with the AMC 10 site:

- Both sites use the Supabase project in `assets/cloud-config.mjs` (public
  browser credentials only; never put a secret or service-role key there).
  A username `name` signs in as `name@users.amc10-prep.invalid`, so one account
  works on both sites.
- Accounts are created by the project owner in Supabase **Authentication →
  Users** (confirmed users). The page cannot create accounts. "Email link"
  sign-in needs sign-ups or the recipient enabled and the site URL
  (`https://ethanzyj.github.io/playground/isee/`, plus
  `http://127.0.0.1:8000/` for local use) added under Authentication → URL
  Configuration → Redirect URLs.
- **One-time setup for progress sync:** run `supabase/isee-schema.sql` once in
  the Supabase SQL editor. It adds `isee_problem_progress`,
  `save_isee_problem_progress` and `isee_user_mastery` (own rows only, RLS on)
  and leaves the AMC 10 tables untouched. Until it has been run, the account
  menu says so and each account's progress is kept in this browser and uploads
  automatically once the tables exist.
- Synced to the account: concept and vocabulary mastery, the Review collection,
  problem marks (with conflict handling across devices) and answers. Kept per
  account in this browser only: a running timed test and essay drafts. The
  language, theme and level are per device.
- To run without sign-in (a fork, for example), empty `url` and
  `publishableKey` in `assets/cloud-config.mjs`; progress then stays in this
  browser only.

## Data and privacy

Without an account (or before the tables exist) progress is stored in the
browser's `localStorage` under `isee-` prefixed keys and never leaves the
device; clearing site data resets it. Signed-in progress is stored in the
account (row-level security limits every user to their own rows) with a copy in
the browser for offline use.

## What was not carried over from AMC 10

The ISEE site omits AMC-specific features that do not apply: imported
real-exam PDFs, per-paper A/B test selection, quests and badges, and PDF problem
export.

## Project layout

```text
index.html               page shell (top bar: theme, level, language, account)
assets/
  app.mjs                main controller (study guide, glossary, map, deep links, account wiring)
  level-scope.mjs        which concepts, problems and terms belong to a level
  account.mjs            sign-in gate and account menu (shared with AMC 10)
  cloud-config.mjs       Supabase project (public browser credentials)
  cloud-progress.mjs     versioned sync of problem marks
  cloud-mastery.mjs      sync of mastery, review collection and answers
  vendor/supabase.mjs    bundled supabase-js (licenses in THIRD_PARTY_LICENSES.txt)
  explorer.mjs           Problem Explorer filters, cards, answer checking
  problem-view.mjs       problem, passage and explanation rendering
  test-mode.mjs          timed-practice logic (pace, scoring, session)
  test-panel.mjs         timed-practice UI
  essay-practice.mjs     essay prompts, timer, drafts
  progress.mjs           progress and accuracy helpers
  figures.mjs            tables, charts and safe SVG figures
  rich-text.mjs          escaping, TeX markers and glossary linking
  taxonomy.mjs           levels, sections, question types, topics, concepts
  data.mjs               assembles all content and numbers problems
  ui-text.mjs, i18n.mjs  interface strings and language handling
  content/               study notes, glossary, problems, passages, essay prompts
supabase/isee-schema.sql one-time database setup for account sync
tests/                   unit, render, cloud-sync and content-validation tests
scripts/bump-version.mjs cache-busting helper
```

## Adding or editing content

Content files export plain data (`TOPIC`/`CONCEPTS`, `GLOSSARY_ENTRIES`,
`PASSAGES`, `PROBLEMS`, `ESSAY_PROMPTS`). Strings are plain text that the app
escapes; use `\( ... \)` for TeX (write TeX with `String.raw`). Verbal
choices are alphabetical, synonym problems carry five glosses, and every
problem needs `explanationEn`/`explanationZh`; Mathematics Achievement and
word problems also need `stemZh`.

Check a single file while writing:

```sh
node tests/check-content-file.mjs assets/content/problems-reading-1.mjs
```

Then run all tests (unit, render, cloud sync and full content validation):

```sh
npm test
```

After adding or renaming a module, refresh the cache-busting stamp that is
appended to every local import so browsers load the new files:

```sh
npm run bump-version
```

`tests/validate-content.mjs` fails if the stamp is not uniform.

## Publishing

The site is served by GitHub Pages from the `gh-pages` branch, in an `isee/`
folder next to the AMC 10 site. To publish, copy `index.html` and `assets/` into
`isee/` on that branch (replacing the old copy), commit and push it. Nothing is
built.

## Official resources

- Sample tests: https://iseelower.erblearn.org/, https://iseemiddle.erblearn.org/,
  https://iseeupper.erblearn.org/
- Preparation and test information:
  https://www.admission.org/assessments/isee/preparation
- The three level-specific "What to Expect" guides are linked from the
  Official practice block in the app (for the level you have selected).
