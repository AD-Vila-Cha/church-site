# Brand standards — AD Vila Chã

Source of truth for logo, color, and typography. Source asset: [`brand/brand-board.jpg`](./brand/brand-board.jpg).

Distinct from [the Lovable prototype](../AGENTS.md#target-architecture), which is the reference for **layout/component structure**, not brand identity — this file wins on colors, typography, and logo usage.

## Logo

Cross + flame mark, paired with the "ASSEMBLEIA DE DEUS / VILA CHÃ" wordmark.

- **Primary** — dark gray cross (`#444444`), flame gradient, on light/white background. `public/cross-logo.svg`, `public/logo-icon.png`.
- **Inverted** — white cross, flame gradient, on dark (`#444444`) background.
- **Secondary/badge** — stacked "AD VILA CHÃ" lockup, in both light-on-dark and dark-on-light variants. Used where the full wordmark doesn't fit (favicon, social avatars, compact spaces).

## Color palette

| Token | Hex | Role |
| --- | --- | --- |
| Dark gray | `#444444` | Primary text, cross mark, dark backgrounds |
| Orange | `#D06F29` | Primary accent (buttons, links, icons) — gradient start |
| Gold | `#E6B922` | Secondary accent — gradient end |
| White | `#FFFFFF` | Background, inverted text |

**Gradient (flame/ember):** `linear-gradient(135deg, #D06F29, #E6B922)`

Any additional neutral tints (surface panels, muted text, borders) are derived from `#444444`/`#FFFFFF` — there's no separate brand swatch for them.

## Typography

**Montserrat** (Google Fonts), used for both display and body text.

- Regular (400) — body copy
- Semibold (600) — emphasis, subheadings
- Bold/ExtraBold (700/800) — headings, CTAs, eyebrows (weights beyond what the board samples, but consistent with the existing heading treatment)

## Where this is implemented

- Color tokens: `app/globals.css` (`:root` custom properties)
- Fonts: `app/layout.tsx` (`next/font/google`)
