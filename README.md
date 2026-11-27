# Cwenga Tshingila · Portfolio

Personal portfolio website for Cwenga Tshingila: computer educator, founder of Promethic, and freelance web developer.

| | |
|---|---|
| **Live site** | <https://promethic.co.za> |
| **Type** | Static website: HTML, CSS and plain JavaScript. No build step, no dependencies to install. |
| **Hosting** | GitHub Pages, with the custom domain set by `CNAME` |
| **Version** | 1.1.0 · see [CHANGELOG.md](CHANGELOG.md) |

---

## 1. Quick start

**View it:** double-click `index.html`. Everything works straight from the file system.

**Serve it locally** (closer to the live site):

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>.

---

## 2. Directory map

```
Portfolio/
├── index.html              Page markup. Entry point, must stay at the root.
├── CNAME                   Custom domain for GitHub Pages. Must stay at the root.
├── _config.yml             GitHub Pages settings: keeps the docs off the live site.
├── README.md               This file: project overview.
├── CHANGELOG.md            Record of every released change.
│
├── assets/                 Everything the live page loads
│   ├── css/
│   │   ├── tokens.css      1 of 4 · Colour palette and light/dark theme
│   │   ├── base.css        2 of 4 · Reset, typography, layout primitives, utilities
│   │   ├── sections.css    3 of 4 · Header, Hello, About, Work, Contact
│   │   └── responsive.css  4 of 4 · Tablet and phone breakpoints, reduced motion
│   ├── js/
│   │   ├── content.js      ✎ Projects and links. Edit this for routine updates.
│   │   ├── artwork.js      Line drawings shown beside each project
│   │   └── main.js         Renders the content and runs the live elements
│   └── images/
│       └── portrait.svg    Illustrated portrait in the Hello section
│
└── docs/                   Reference documentation (not published)
    ├── DESIGN.md           Design brief, colour tokens, type scale, breakpoints
    └── MAINTENANCE.md      Step-by-step procedures and pre-publish checklist
```

---

## 3. How the page is built

```
index.html ──► assets/css/   tokens → base → sections → responsive   (styles, in order)
           └─► assets/js/    content ─┐
                             artwork ─┼─► main.js ──► fills #project-list and #link-list,
                                      │               starts the clock and LED mark,
                                      │               wires the Copy button
```

* **Markup** for every section lives in `index.html`. The page reads top to bottom as
  Header → 00 Hello → 01 About → 02 Work → 03 Contact, matching the numbered index on the page.
* **Styles** are split into four files that load in a fixed order. Later files override
  earlier ones, which is why the responsive rules come last.
* **Scripts** load with `defer`, so they run in order after the page is parsed. They share
  one global namespace, `window.Portfolio`, holding `content` and `artwork`.
* **Content** that changes over time (projects and links) is kept apart from code in
  `content.js`, so updates never risk breaking layout or behaviour.

---

## 4. Common tasks

| Task | Where |
|---|---|
| Add, edit or reorder a project | `assets/js/content.js` → section 2, PROJECTS |
| Add or change an "Elsewhere" link | `assets/js/content.js` → section 1, LINKS |
| Draw artwork for a new project | `assets/js/artwork.js` |
| Change the email address | `index.html` → SECTION 03 · CONTACT (link text and `mailto:`) |
| Edit About text or the ledger | `index.html` → SECTION 01 · ABOUT |
| Change a colour | `assets/css/tokens.css` |
| Replace the portrait | `assets/images/portrait.svg` |

Full procedures, plus the checklist to run before publishing, are in
[docs/MAINTENANCE.md](docs/MAINTENANCE.md).

---

## 5. Conventions

* **File headers.** Every CSS and JS file opens with a header block stating its purpose,
  dependencies and load order.
* **Numbered sections.** Comments are numbered by file (`1.x` tokens, `2.x` base, `3.x`
  sections, `4.x` responsive) so a reference like "3.4" points to one place.
* **Colours** are only ever written in `tokens.css`. Everything else uses `var(--token)`.
* **Names** are lowercase and hyphenated for files, classes and IDs. Class names describe
  what an element is (`.project`, `.contact-grid`, `.site-footer`), not how it looks.
* **Section anchors** `#hello`, `#about`, `#work` and `#contact` are part of the public URL
  scheme. Do not rename them.
* **Text from `content.js` is escaped** before it reaches the page, so it is plain text only.

---

## 6. Deployment

The site is published from the root of its GitHub repository by GitHub Pages.

1. Run the pre-publish checklist in [docs/MAINTENANCE.md](docs/MAINTENANCE.md#3-pre-publish-checklist).
2. Commit and push (or upload) the changed files to the repository.
3. GitHub Pages rebuilds within a minute or two. Check <https://promethic.co.za>.

`index.html` and `CNAME` must remain at the repository root. `_config.yml` stops GitHub Pages
from publishing `README.md`, `CHANGELOG.md` and `docs/`. These files are still visible to
anyone browsing the repository itself, which is fine: they contain nothing private.

**Uploading through the GitHub website:**

* Drag in the **contents** of this folder, not the folder itself, so `index.html` lands at
  the top level of the repository.
* Uploading adds and replaces files but never deletes them. If a file was removed or moved
  here, delete the old copy on GitHub too (open the file → ⋯ menu → Delete file).
* GitHub treats `Assets` and `assets` as different folders, even though Windows does not.
