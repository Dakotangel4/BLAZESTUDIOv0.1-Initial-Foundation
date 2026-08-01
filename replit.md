# Blaze Studio

Premium digital agency website for Blaze Studio — a static HTML/CSS/vanilla JS site with no build step or dependencies.

**Live site:** [www.blazestudio.com.ng](https://www.blazestudio.com.ng)

## How to run

```
python3 -m http.server 5000
```

The workflow "Start application" is configured to do this automatically.

## Stack

- HTML5, CSS3 (modular files), Vanilla JS (ES modules)
- Google Fonts: Sora (headings), Poppins (body)
- No frameworks, no build tools, no package manager

## Project structure

```
index.html          # Homepage
about.html          # About page
styles.css          # Global styles
hero.css            # Hero section
branding.css        # Brand styles
audit.css           # Audit-driven improvements
footer.css          # Footer
about.css           # About page styles
js/
  main.js           # ES module entry
  animations.js     # Scroll reveal
assets/             # Logos, images, SVGs
```

## User preferences

- Do not modify the Blaze Studio logo, colors, or typography
- Do not rewrite marketing copy unless explicitly instructed
- Follow the git workflow: branch → implement → PR (never commit directly to main)
- Use Conventional Commits (`feat:`, `fix:`, `style:`, etc.)
