# Blaze Studio

> Premium websites, mobile apps, AI solutions, and digital experiences engineered to help ambitious businesses scale faster.

**Live site:** [www.blazestudio.com.ng](https://www.blazestudio.com.ng)

---

## Overview

Blaze Studio is the official website for Blaze Studio — a premium digital agency based in Delta State, Nigeria. The site is built as a pure static site (no build step, no framework) and is designed to communicate trust, innovation, and premium quality, inspired by Apple, Stripe, Vercel, Framer, and Microsoft.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic) |
| Styling | CSS3 — modular files (`styles.css`, `hero.css`, `branding.css`, `audit.css`, `footer.css`, `about.css`) |
| Scripting | Vanilla JavaScript (ES modules) |
| Fonts | Google Fonts — Sora (headings), Poppins (body) |
| Assets | PNG, SVG |
| Hosting | blazestudio.com.ng |

No build tools, package managers, or frameworks are required.

---

## Project Structure

```
BLAZESTUDIOv0.1/
├── index.html          # Homepage
├── about.html          # About page
├── styles.css          # Global styles, layout, components
├── hero.css            # Hero section overrides
├── branding.css        # Brand-specific styles
├── audit.css           # Audit-driven improvements
├── footer.css          # Site-wide footer
├── about.css           # About page styles
├── script.js           # Legacy scroll/nav script (index only)
├── js/
│   ├── main.js         # ES module entry point
│   ├── navigation.js   # Mobile nav toggle
│   └── animations.js   # Scroll reveal (IntersectionObserver)
├── assets/
│   ├── blaze-studio-horizontal.png  # Primary logo (navbar + footer)
│   ├── blaze-studio-favicon.png     # Browser tab icon
│   ├── blaze-studio-og.png          # Open Graph / social share image
│   ├── ai-hologram.svg              # Decorative — AI section
│   ├── hero-hologram.svg            # Decorative — hero stage
│   ├── cta-orbit.svg                # Decorative — CTA section
│   └── footer-grid.svg              # Decorative — footer
├── sitemap.xml
├── robots.txt
├── README.md
├── CONTRIBUTING.md
└── CHANGELOG.md
```

---

## Running Locally

No installation required. Serve the root directory with any static file server:

```bash
# Python (built-in)
python3 -m http.server 5000

# Node (npx)
npx serve .
```

Then open [http://localhost:5000](http://localhost:5000).

---

## Git Workflow

This project follows a feature-branch workflow. `main` is the stable production branch — **never commit directly to main**.

### Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Stable production code — merge only after testing |
| `feature/homepage-polish` | Homepage refinements (hero, sections, animations) |
| `feature/about-page` | About page content and layout |
| `feature/contact-form` | Contact form build and backend |
| `feature/footer-redesign` | Footer structure and content |
| `feature/seo` | Meta tags, sitemap, structured data, robots.txt |
| `feature/performance` | Image optimisation, lazy loading, caching |
| `feature/mobile-optimization` | Responsive layout and mobile UX |

> Create a branch only when work on that feature begins. Delete it after merging.

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add contact form
fix: correct logo asset crop
style: improve footer spacing
refactor: reorganize CSS modules
perf: lazy-load below-fold images
docs: update README
chore: add .gitignore
```

### Workflow Cycle

```
1. git pull origin main          # Sync
2. git checkout -b feature/xxx   # Branch
3. # Audit → implement → test
4. git commit -m "feat: ..."     # Commit frequently
5. git push origin feature/xxx   # Push branch
6. Open PR → review → merge      # Never auto-merge
```

---

## Deployment

The site is deployed as a static site to [www.blazestudio.com.ng](https://www.blazestudio.com.ng). No build step is required — deploy the root directory directly.

---

## Brand Guidelines

- **Do not** modify the Blaze Studio logo, colors, or typography.
- **Do not** rewrite marketing copy unless explicitly instructed.
- **Do not** introduce new design patterns that conflict with the existing visual identity.
- All logo instances must use `assets/blaze-studio-horizontal.png` without cropping, stretching, or distortion.

---

## Contact

**Blaze Studio**
J&F Plaza, Opp. Otokutu Market, Otokutu, Delta State, Nigeria
📧 hello@blazestudio.com.ng · 📞 +234 913 098 6279
