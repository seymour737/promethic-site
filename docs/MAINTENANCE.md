# Maintenance procedures

| | |
|---|---|
| **Applies to** | Portfolio v1.1.0 |
| **Purpose** | Step-by-step instructions for routine updates, and the checks to run before publishing |
| **Last reviewed** | 2026-11-27 |

---

## 1. Before you start

* Routine updates (projects, links) only touch **`assets/js/content.js`**.
* After any change, refresh `index.html` in the browser to check it.
* When the change is ready, run the [pre-publish checklist](#3-pre-publish-checklist).

---

## 2. Procedures

### P-1 · Add a project

1. Open `assets/js/content.js` and find section **2. PROJECTS**.
2. Copy an existing project block, from its `{` to its `},`.
3. Paste it where the project should appear. The list order is the page order.
4. Edit each field:

   | Field | What to write | Example |
   |---|---|---|
   | `name` | Project title | `'Mission Control'` |
   | `kind` | One-line category | `'Classroom game, Grades 5-7'` |
   | `status` | Short label, shown in the sand accent | `'In development'` |
   | `desc` | One or two sentences | |
   | `tags` | Technologies, as a list | `['JavaScript', 'Firebase']` |
   | `art` | Key of a drawing in `artwork.js` | `'mission'` |

5. Keep the commas between projects. The last project may have none.
6. Save and refresh. If the artwork tile is empty, the `art` key does not match a drawing (see P-2).

> **Apostrophes:** values are wrapped in single quotes, so write an apostrophe as `\'`
> (for example `'Learner\'s guide'`), or wrap that value in double quotes instead.

### P-2 · Add artwork for a project

1. Open `assets/js/artwork.js`.
2. Add a new entry inside `Object.freeze({ ... })`, following the existing ones:
   * Canvas: `viewBox="0 0 120 90"`
   * Colour: always `stroke="currentColor"` or `fill="currentColor"`, never a hex value.
     The colour comes from CSS.
   * Style: `fill="none"`, `stroke-width="3.5"`, `stroke-linecap="round"` to match the set.
3. Use double quotes inside the SVG and single quotes around each string piece.
4. Set the project's `art` field in `content.js` to the new key.

### P-3 · Add or change an "Elsewhere" link

1. Open `assets/js/content.js`, section **1. LINKS**.
2. Add or edit a line: `{ label: 'Name shown', url: 'https://…' },`
3. Links open in a new tab automatically.

### P-4 · Change the email address

1. Open `index.html` and find **SECTION 03 · CONTACT**.
2. Change the address in **both** places on the `<a id="email">` line: the `href="mailto:…"`
   and the visible text. The Copy button copies the visible text.

### P-5 · Edit the About section or the ledger

Open `index.html`, **SECTION 01 · ABOUT**. Each paragraph is a `<p>`; each ledger entry is one
`<div><dt>Label</dt><dd>Value</dd></div>` line.

### P-6 · Change a colour

1. Open `assets/css/tokens.css`.
2. Change the value of the token. For `light-dark(A, B)`, A is light mode and B is dark mode.
3. Never write a raw colour in another file; add a new token here instead.
   See [DESIGN.md §2](DESIGN.md#2-colour-tokens) for what each token controls.

### P-7 · Replace the portrait

1. Save the new image as `assets/images/portrait.svg` (same name), replacing the old one.
2. If its proportions differ from 600 × 690, update the `width` and `height` on the `<img>`
   in `index.html`, SECTION 00 · HELLO.

### P-8 · Update the footer year

`index.html`, SECTION 03 · CONTACT, the `© 2026` line.

---

## 3. Pre-publish checklist

Run through this list before every upload.

- [ ] Page opens with no errors (browser `F12` → Console tab is empty of red messages)
- [ ] Every project shows its title, description, tags and artwork
- [ ] Every "Elsewhere" link opens the correct page
- [ ] Email link opens a new message; Copy button shows "Copied"
- [ ] Layout checked at laptop width and at phone width
  (`F12` → device toolbar, about 390px wide)
- [ ] New text spell-checked
- [ ] `CHANGELOG.md` updated with what changed and today's date
- [ ] `index.html` and `CNAME` are still at the top level of the folder

---

## 4. Recurring tasks

| When | Task | Procedure |
|---|---|---|
| Every January | Update the footer year (`© 2026` → the new year) | P-8 |
| Each new project or role | Update the project list, ledger and About text | P-1, P-5 |

---

## 5. Open items

None. All issues found during the v1.1.0 restructure have been resolved.
