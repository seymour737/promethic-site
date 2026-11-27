# Design reference

| | |
|---|---|
| **Applies to** | Portfolio v1.1.0 |
| **Source of truth** | `assets/css/tokens.css` (colours), `assets/css/sections.css` (sizes) |
| **Last reviewed** | 2026-11-27 |

---

## 1. Design brief

| | |
|---|---|
| **Voice** | Personal, calm, confident: a teacher who ships software. |
| **Idea** | A well-kept index card or table of contents, set with plenty of air and real contrast. |
| **Picture** | The oversized section index on the first screen; one-ink drawings for each project; a micro:bit-style LED mark. |
| **Colour** | Warm stone ground, near-black ink, deep charcoal bands, one quiet sand accent on the dark. |
| **Type** | Geist throughout. Light weights at large sizes, medium for labels. |
| **Layout** | Laptop: statement left, index right. Phone: statement, then index, then sections stacked. |

---

## 2. Colour tokens

Defined once in `assets/css/tokens.css`. Light bands follow the visitor's light/dark setting;
the deep bands stay dark in both modes.

### 2.1 Light bands (Hello, About)

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--bg` | `#E8E5DF` | `#151412` | Page background |
| `--surf` | `#F1EFEA` | `#1C1B19` | Raised surface (reserved, not yet used) |
| `--ink` | `#171615` | `#ECE8E1` | Primary text |
| `--mute` | `#5C5852` | `#A39D93` | Secondary text, labels |
| `--rule` | `#CDC8BF` | `#2E2C29` | Hairline dividers, unlit LED cells |

### 2.2 Deep bands (Work, Contact)

| Token | Value | Used for |
|---|---|---|
| `--deep` | `#1B1A18` / `#0D0C0B` | Band background (light / dark mode) |
| `--tile` | `#252421` / `#191816` | Project artwork tile (light / dark mode) |
| `--deep-ink` | `#ECE8E1` | Primary text |
| `--deep-body` | `#D6D1C8` | Project descriptions |
| `--deep-mute` | `#A39D93` | Secondary text |
| `--deep-rule` | `#34322E` | Dividers, tag-chip borders |
| `--deep-hover` | `#2A2825` | Copy button hover |

### 2.3 Accents

| Token | Value | Used for |
|---|---|---|
| `--sand` | `#C4B395` | The single accent: project artwork, project status, link hover |
| `--signal` | `#7D8A6E` | "Available" dot in the header |

---

## 3. Typography

Typeface: **Geist** from Google Fonts, weights 300, 400, 500 and 600.
Fallbacks: Inter, then the system UI font.

| Element | Size (min → max) | Weight | Rule |
|---|---|---|---|
| Body | 17px (16px on phones) | 400 | `body` |
| Section headings | 40 → 76px | 300 | `h2` |
| Hero statement | 28 → 42px | 300 | `.lede` |
| Section index links | 36 → 64px | 300 | `.index a` |
| About copy | 20 → 26px | 300 | `.about-copy` |
| Project titles | 24 → 34px | 400 | `.project h3` |
| "Let's talk." | 64 → 190px | 300 | `.big-cta` |
| Labels | 13px | 500 | `.ledger dt`, `.contact-grid dt`, `.index small` |

Sizes between the minimum and maximum scale with the window width using `clamp()`.

---

## 4. Layout

| Property | Value |
|---|---|
| Content width | 1240px maximum (`.wrap`) |
| Band padding | 56 → 120px vertical, 5% of width (min 18px) horizontal (`.band`) |
| Sticky header offset | 72px, so anchor links land below the header |

### 4.1 Breakpoints

| Width | Changes |
|---|---|
| > 900px | Two-column hero, three-column project rows, three-column contact grid |
| ≤ 900px | Hero stacks (statement, portrait, index). About becomes one column. Project description moves below its title. Contact: email on top, two columns beneath. |
| ≤ 600px | Body text 16px. Location hidden from header. Project artwork shrinks to 96px. Contact stacks into one column. |

---

## 5. Motion

| Element | Behaviour |
|---|---|
| LED mark | Cycles four frames (C, heart, smile, P) every 1.8 s |
| Section index | Hovered link slides right 14px; the others dim |
| Project artwork | Scales to 103% when its row is hovered |
| Header | Divider fades in after 8px of scrolling |

**Reduced motion:** when the visitor's system asks for reduced motion, all transitions and
smooth scrolling are switched off and the LED mark holds its first frame.

---

## 6. Accessibility

* Decorative elements (LED mark, artwork, arrows) are hidden from screen readers with `aria-hidden`.
* Links and buttons show a 2px focus ring when reached by keyboard. The Copy button's
  `all: unset` strips the default ring, so `sections.css` §3.5 restores it explicitly.
* The portrait has alternative text.
