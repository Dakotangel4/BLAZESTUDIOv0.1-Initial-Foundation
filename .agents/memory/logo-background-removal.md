---
name: Logo Background Removal
description: Safe fallback for removing plain white backgrounds from uploaded Blaze Studio logo assets.
---

For plain-background logo uploads, remove only edge-connected background pixels with alpha flood-fill, then trim transparent padding while keeping a small transparent border. Do not use global white-to-transparent replacement when enclosed white areas may be part of the artwork.

**Why:** The dedicated background-removal helper may be unavailable in the current execution mode, while global color replacement can erase intentional interior regions of a logo.

**How to apply:** Preserve the uploaded source as a backup, produce a transparent PNG in `assets/`, inspect the alpha channel and rendered header, and update only the shared asset references.