# Changelog

All notable changes to this site are recorded here, newest first.
Versions follow `MAJOR.MINOR.PATCH`: major for a redesign, minor for new sections or structure,
patch for content and small fixes.

---

## [1.1.0] · 2026-11-27 · Restructure

Reorganised the project for maintainability. **The page looks and behaves exactly as before**,
apart from the keyboard focus-ring fix listed under Fixed.
Verified by comparing every element's computed style, attributes and text against v1.0.0 at
1280px, 768px and 390px widths: no differences.

### Changed
- Split the single `index.html` into markup (`index.html`), four stylesheets (`assets/css/`)
  and three scripts (`assets/js/`).
- Moved projects and links into `assets/js/content.js`, and project drawings into
  `assets/js/artwork.js`, so content edits never touch code.
- Moved `portrait.svg` to `assets/images/portrait.svg`. Renamed `Assets/` to `assets/`.
- Moved the remaining hard-coded colours into `tokens.css` as `--deep-body`, `--deep-hover`
  and `--signal`.
- Moved inline `style=""` attributes into the stylesheets.
- Moved the design brief from a CSS comment into `docs/DESIGN.md`.
- Named the script's timings and settings as constants at the top of `main.js`.
- Renamed short or ambiguous class names and IDs:

  | Before | After |
  |---|---|
  | `.top`, `#top` | `.site-header`, `#site-header` |
  | `.m` | `.muted` |
  | `.dot`, `.where`, `.tz` | `.live-dot`, `.location`, `.clock` |
  | `.hero-l` | `.hero-text` |
  | `.copy` (About text) | `.about-copy` |
  | `.head` | `.section-head` |
  | `.work`, `#worklist` | `.project-list`, `#project-list` |
  | `.row` | `.project` |
  | `.kind`, `.status`, `.desc`, `.tags`, `.art` | `.project-kind`, `.project-status`, `.project-desc`, `.project-tags`, `.project-art` |
  | `.cgrid` | `.contact-grid` |
  | `#mail` | `#email` |
  | `button.copy`, `#copy` | `button.copy-btn`, `#copy-email` |
  | `#links` | `#link-list` |
  | `.foot` | `.site-footer` |

### Fixed
- Content typos: "colection" → "collection", "Whatsapp" → "WhatsApp".
- Promethic description: "pertain a Grade 12 subject suite" → "includes a Grade 12 subject suite".
- The class `.copy` was used for both the About text and the Copy button.
- The Copy button now shows a focus ring when reached by keyboard. Its `all: unset` had
  removed the ring every other link and button has.
- A project whose `art` key has no drawing now shows an empty tile instead of the word "undefined".

### Removed
- Unused CSS rule `.index a::after`.
- `Assets/Web_Banner2.jpg`, an image the page never used.
- Top-level `portrait.svg` and the `Assets/` folder (now `assets/images/portrait.svg` and `assets/`).

### Added
- `README.md`, `CHANGELOG.md`, `docs/DESIGN.md`, `docs/MAINTENANCE.md`.
- `_config.yml`, which keeps the documentation off the live site.

---

## [1.0.0] · Initial release

- Single-file site: markup, styles and scripts all in `index.html`.
