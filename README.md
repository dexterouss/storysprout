# StorySprout

A buildless composition-writing game for grades 1–6. Serve the repository root as the static root. The application has no third-party dependencies, external fonts, analytics, paid APIs or AI marking service.

## Learning experience

Each grade has five missions, from describing and recounting to explanations, opinion writing and stories. Pupils can choose any grade. Within a grade, finishing a mission opens the next one; a grown-up can open all levels.

| Grade | Level 1 | Level 2 | Level 3 | Level 4 | Level 5 |
|---|---:|---:|---:|---:|---:|
| 1 | 10 | 15 | 20 | 25 | 30 |
| 2 | 25 | 35 | 45 | 55 | 70 |
| 3 | 50 | 70 | 90 | 110 | 130 |
| 4 | 80 | 110 | 140 | 170 | 200 |
| 5 | 120 | 150 | 180 | 220 | 260 |
| 6 | 150 | 180 | 220 | 270 | 320 |

Targets are editable practice goals, not official curriculum standards. A target applies to the composition body; the title and planning notes do not count. There is no time limit or word-count ceiling at the target. Sentence and paragraph counts are simple writing aids, not linguistic assessment.

Each completed mission earns one star for reaching its word target, one more for three nonblank planning notes, and one more for completing the self-review checklist. Stars celebrate process, not composition quality. Best star totals persist on revision; replaying a mission cannot farm rewards. Editing a composition resets its review checklist. Finished versions remain independent from current drafts until the next finish.

## Data and accessibility

Up to eight nickname-based writer profiles use `localStorage` in this browser. No cloud sync is provided. JSON backups include all local profiles and can be restored after explicit in-app confirmation. Plain-text exports and printable finished writing are available. Storage failures are displayed and current writing remains in memory. Profiles are organisational, not password protected.

The interface supports small screens, labelled inputs, keyboard navigation, focus-contained dialogs, reduced motion, three writing text sizes and browser-provided read-aloud where supported. Reward sounds are optional and off by default. No browser microphone access is needed.

## Verification

Run `node --test tests/*.test.mjs` for curriculum, word-count, progression, reward, snapshot, profile, backup, storage-failure and controller checks. Controller tests use an in-memory document, not a real browser. Run `node --check app.mjs` and `node --check core.mjs` for syntax checks. Browser/layout verification requires an available supported browser-control capability.

## GitHub Pages

This repository is ready for branch-based GitHub Pages hosting. In Settings → Pages, choose “Deploy from a branch”, select `main` and `/(root)`, and save. The app uses relative asset paths so it works beneath a repository URL. No build, server, database, paid API, or secret is required.

When moving from another host, make a JSON backup in the old app and restore it on GitHub Pages. Browser data is tied to the original website and will not move automatically.
