# Contributing to Blaze Studio

This document defines the engineering workflow for all contributors — human or AI.

---

## Branch Naming Convention

```
feature/<feature-name>     # New feature or improvement
fix/<issue-description>    # Bug fix
style/<area>               # Visual/CSS-only change
refactor/<area>            # Code restructure, no behaviour change
perf/<area>                # Performance improvement
docs/<area>                # Documentation only
chore/<task>               # Tooling, config, maintenance
```

**Examples:**
```
feature/contact-form
fix/logo-crop
style/footer-spacing
refactor/css-variables
perf/image-lazy-loading
docs/readme-update
chore/gitignore
```

> Only create a branch when you are ready to start that work. Do not pre-create branches.

---

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <short imperative description>
```

| Type | When to use |
|---|---|
| `feat` | Adding a new feature or page |
| `fix` | Correcting a bug or broken asset |
| `style` | CSS, spacing, visual tweaks — no logic changes |
| `refactor` | Restructuring code without changing behaviour |
| `perf` | Performance improvements |
| `docs` | README, CONTRIBUTING, CHANGELOG, comments |
| `chore` | Config, .gitignore, tooling, non-source changes |

**Rules:**
- Use the imperative mood: `add`, `fix`, `update` — not `added` or `fixes`
- Keep the subject line under 72 characters
- Make one logical commit per change — never one massive commit per feature
- Do not include ticket numbers or PR references in commit messages

---

## Pull Request Process

1. Ensure your feature branch is up to date with `main` before opening a PR
2. Push your branch: `git push origin feature/<name>`
3. Open a PR with:
   - **Title:** matches the conventional commit type and scope
   - **Summary:** what was changed and why
   - **Files modified:** list every file touched
   - **Screenshots:** before/after for any visual change
   - **Known issues:** anything incomplete or deferred
   - **Recommendations:** suggested follow-up work
4. Do **not** merge your own PR — wait for review and approval
5. Delete the feature branch after it is merged

---

## Coding Standards

### HTML
- Use semantic elements (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- Every `<img>` must have a descriptive `alt` attribute
- Decorative elements use `aria-hidden="true"`
- Interactive elements must be keyboard-navigable
- Include skip-link for accessibility

### CSS
- Use CSS custom properties (`--blue`, `--navy`, etc.) — never hardcode brand colors
- One CSS file per page/section concern (no monolithic stylesheet)
- Mobile-first media queries
- No inline styles except for truly one-off dynamic values
- Avoid `!important` except in utility overrides

### JavaScript
- ES modules only (`type="module"`)
- No global variables — export named functions
- One concern per file (`navigation.js`, `animations.js`)
- No jQuery or external dependencies

---

## Asset Management Rules

- All images go in `/assets/`
- Logo files: `blaze-studio-horizontal.png`, `blaze-studio-favicon.png`, `blaze-studio-og.png`
- SVG decorative assets: prefix with their section name (e.g. `hero-hologram.svg`)
- Never commit unoptimized images — compress PNGs before adding
- Maintain transparency in logo assets (RGBA PNG)
- Do not rename existing logo files without updating every reference

---

## Brand Guidelines

| Rule | Detail |
|---|---|
| Logo | Use `assets/blaze-studio-horizontal.png` — no cropping, stretching, or recolouring |
| Colors | `--blue: #1e6bff` · `--navy: #0b1220` · `--cyan: #4cc9f0` — defined in `styles.css` |
| Headings | Sora (700–800 weight) |
| Body | Poppins (400–600 weight) |
| Copy | All marketing copy is owned by the product manager — do not rewrite unless instructed |
| Imagery | No robotic hands in the hero — robotic/AI imagery is reserved for the AI Automation section |

---

## Review Checklist

Before opening a PR, confirm:

- [ ] Tested on desktop (1280px+)
- [ ] Tested on tablet (768px–1024px)
- [ ] Tested on mobile (375px–767px)
- [ ] No console errors
- [ ] All images have `alt` text
- [ ] Logo is not cropped or distorted
- [ ] Canonical brand copy is unchanged (unless requested)
- [ ] No hardcoded colors or fonts outside CSS variables
- [ ] CSS is in the correct modular file, not inline
- [ ] Committed in logical increments
- [ ] Branch is up to date with `main`
