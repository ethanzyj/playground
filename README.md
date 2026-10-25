# AMC 10 Prep

Run from this folder with `python3 -m http.server 8000 --bind 127.0.0.1`,
then open http://127.0.0.1:8000. The checked-in browser bundle runs without
installing dependencies. Development and tests require Node.js 20 or later:
run `npm ci`, then `npm run build` after SDK dependency changes.
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

In the Study Guide, each concept's **Related AMC 10 references** appear as a
compact year × exam table of problem-number chips, color-coded by difficulty,
with a green dot on problems you have marked. Selecting a chip opens that
problem on its **Full exam page** in the Problem Explorer; **View all in Problem
Explorer** shows the concept's full reference list there.

Each problem has a **My progress** panel, expanded by default and kept open
after selecting an option: **Need help understanding**,
**Understand, but need a starting point**, or **Understand and have a solution
approach**. Selections are saved in this browser, independently for each year,
exam, and problem number, and shared across reference cards and full exam pages.
Guest selections are not synced to other browsers or devices. Optional cloud
accounts can sync problem selections once configured below. Storage errors
display a warning.
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
analysis across all years and exams, regardless of current filters. Exporting
does not upload anything. Keep periodic exports to compare changes over
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

## Optional accounts and server-side progress

`assets/cloud-config.mjs` now points to the user-provided Supabase project
`gballcikrgzqbshwzizn`, using its public publishable key. Email authentication is
enabled. The remote `public.problem_progress` table and `save_problem_progress`
function are present and reject anonymous access. The public connection
configuration is enabled for publication; real email delivery, auth redirect
settings, and authenticated cross-device syncing still need an account check.
Guest mode and existing `amc10-problem-progress` selections remain available.
To disable accounts, leave both connection settings empty.

To enable:

1. Create a Supabase project in your own organization. Choose the appropriate
   region and plan; review costs and data retention. In its SQL Editor, run
   `supabase/schema.sql` as the database administrator. It creates the progress
   table, owner-only SELECT policy, and authenticated, version-checked save RPC.
   The script is rerunnable for this initial schema; future schema changes
   should use explicit migrations rather than assuming `IF NOT EXISTS` updates
   table definitions.
2. Enable the Email provider under Authentication. Keep email confirmation
   enabled. Set the production Site URL to
   `https://ethanzyj.github.io/playground/`. Add exact Redirect URLs for that
   address and `http://127.0.0.1:8000/` if local testing is needed. Avoid broad
   wildcard redirect rules. Use the standard magic-link template with
   `{{ .ConfirmationURL }}`. Configure a production SMTP provider and appropriate
   auth rate limits before public launch; the built-in mail service is limited.
3. Set `url` to your Supabase HTTPS project origin and `publishableKey` to its
   **publishable** key (or legacy **anon** key) in `assets/cloud-config.mjs`.
   These browser settings are public. **Never use service-role, secret,
   database-password, or SMTP credentials in source code or the frontend.**
   The app rejects secret/service-role keys, but database policies—not hiding
   a public key—protect user data.
4. Run `npm ci && npm run build && npm test`. Publish the static folder as
   before. If changing configuration on an already deployed site, update the
   config import version in `assets/account.mjs` and the account/app import
   versions so browsers do not reuse cached configuration.
5. Verify with two real email accounts: sign in, import guest progress,
   mark a problem, reload, and check it on a second browser/device. Verify that
   the second account cannot read the first account's rows. Test logout,
   offline edits and retry, and simultaneous conflicting edits on two devices.
   Local tests exercise PostgreSQL policies and mocked auth flows; they do not
   establish that your deployed project's email and auth settings work.

### Account behavior

When cloud login is configured, the site opens on a **Sign in to continue**
landing page; the study guide, problem explorer, and glossary are hidden and
inert until an account is signed in. If the sign-in service cannot be checked,
the page stays locked. Signing out returns to the landing page. Leaving both
connection settings empty disables the gate and restores browser-only guest use.
After sign-in, the account appears as a username chip in the top-right corner;
hover over it (or tap/click it) to see sync status, **Sync now**, and **Sign out**.
**Username & password** is the default sign-in method. Usernames are case-insensitive, with 3–32 letters,
numbers, or underscores. Supabase validates the password; the frontend contains
no account passwords and does not store them in its progress cache. The SDK
persists the authenticated session, not the password. Guest use remains
available only when cloud login is not configured.

Supabase email/password authentication requires an email-shaped identifier
internally. A username maps to `<username>@users.amc10-prep.invalid`; these
reserved `.invalid` addresses are identifiers only, not real mailboxes. To
provision the requested accounts, a project administrator must open Supabase
**Authentication → Users → Add user → Create new user** and create
`ethanzyj@users.amc10-prep.invalid` and `evanz@users.amc10-prep.invalid`, set each
password privately, and enable **Auto Confirm User**. Do not use **Invite user**:
no email should be sent. Keep the Email auth provider enabled for password
authentication. There is no public username-registration form. Do not disable
email confirmation project-wide just to provision these accounts. No progress
schema change is needed.

Confirmed username accounts cannot receive email password-reset links.
An administrator must reset a forgotten password through Supabase. Use unique,
strong passwords for production, and never commit passwords or admin keys.
Username accounts have distinct Supabase user IDs from previously created real
email accounts; existing cloud progress is not automatically transferred.

**Email link** remains available for existing email accounts. Open its link in
the **same browser/profile and site** that requested it (PKCE). The Supabase SDK
stores the session locally, refreshes tokens, and returns to the page.

The email sign-in form works for both new and existing email accounts; there is
no separate registration step. Failed account actions display the service's
error as plain text, with localized guidance for email limits, unauthorized
recipients, invalid addresses, and disabled signups. Repeated link requests can
hit recipient cooldowns or project-wide mail limits. Check Supabase Auth logs
and email/SMTP settings rather than changing the progress SQL or repeatedly
requesting links. A public publishable key cannot change those admin settings.

Each account has a separate browser cache and pending-write queue
(`amc10-account-progress:<user id>`). Signed-in changes are saved locally, then
synced to the account's server rows. The panel shows syncing, saved, errors,
pending counts, or conflicts. It refreshes on login, browser focus, connectivity
return, and **Sync now / retry**. This is not real-time push synchronization.
Offline pending changes survive reloads on the same browser. Do not clear
browser storage before they are synced or exported.

The browser never silently copies guest work to the account. **Import unmarked
problems** adds only guest selections absent from the account; existing account
selections win. **Keep separate** skips the prompt for that account on this
browser. Original guest selections are retained. Remote changes that conflict
with pending edits require choosing **Use this browser's choice** or **Use cloud
choice**. The save RPC checks server versions and the expected authenticated
user; it does not trust a client-supplied user ID for ownership.

Signing out restores the separate guest selections, never the last account's
statuses. If pending writes remain, a second explicit sign-out confirmation is
required. Pending account data remains in that account's local cache for its
next login. **Signing out does not erase cached account data from this browser**;
people sharing a browser profile should use separate profiles or a private
session, and ensure changes are synced before clearing site data.

Only the three **problem readiness statuses** sync in this version. Concept and
glossary mastery, language, and theme remain browser-local. The database keeps
the latest status, a server timestamp, and a version, not a complete event
history. JSON exports reflect the currently visible guest/account data across
all papers. Change-history analysis and Google login are not included yet.

### SDK and tests

The Supabase SDK is pinned in `package-lock.json` and bundled locally into
`assets/vendor/supabase.mjs`; login does not load an auth SDK from a third-party
CDN. `npm run build` also writes third-party license notices. The vendored
Supabase MIT notice comes from the matching v2.80.0 monorepo LICENSE because
published packages omit that file.

`npm test` includes isolated account/offline/conflict tests, DOM tests for guest
mode and account controls, and PostgreSQL schema/RLS tests using PGlite. No real
accounts, external database, or email service is used by those tests.
