# Blaze Studio

A static marketing website for Blaze Studio — a web agency offering websites, apps, AI-powered solutions, and digital experiences.

## Stack

- Pure HTML, CSS, and JavaScript — no build step, no framework, no dependencies
- CSS files: `styles.css`, `hero.css`, `branding.css`, `audit.css`, `footer.css`, `about.css`
- JS entry point: `js/main.js` (modules: `js/navigation.js`, `js/animations.js`)
- SVG and PNG assets in `assets/`
- Pages: `index.html` (home), `about.html` (About page)

## How to run

Serve the root directory as a static site. Any static file server works:

```bash
npx serve .
# or
python3 -m http.server 5000
```

## Project notes

An engineering audit (`attached_assets/Pasted-Blaze-Studio-v0-1-Engineering-Audit-Overall-Assessment-_1785428098573.txt`) has been completed and scores the project at **7.8/10**. Key improvement areas identified:

- Branding & logo usage (6/10)
- Responsiveness (6.5/10)
- CSS architecture — duplicate rules, missing CSS variables (6/10)
- SEO — missing OG tags, sitemap, robots.txt (5/10)
- Accessibility — alt text, ARIA, keyboard nav (5.5/10)
- Performance — unoptimized images, no lazy loading (6.5/10)

## User preferences

- Focus on backend work only (APIs, server, database, integrations, infrastructure). Design, copy, and content decisions are handled by the product manager — do not suggest wording or visual changes.
