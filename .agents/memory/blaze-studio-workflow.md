---
name: Blaze Studio Development Workflow
description: Mandatory workflow for all Blaze Studio code changes — branching, audit, commit, PR rules.
---

# Blaze Studio Development Workflow

**Why:** The PM established this to keep `main` stable and allow safe experimentation via feature branches.

## The cycle (no exceptions)

1. Sync from GitHub — clean working tree before starting
2. Create `feature/<feature-name>` branch — never commit to `main`
3. Audit first — inspect current code, explain plan, list affected files; wait for approval on significant changes
4. Implement one feature only
5. Commit frequently with clear messages
6. Push feature branch only — do not merge
7. Open PR with: summary · files changed · screenshots · known issues · recommendations

## Hard constraints
- Do NOT redesign pages, replace branding, regenerate logos, change typography/colors, or rewrite copy unless explicitly requested
- Do NOT merge into main automatically — always wait for user approval

## How to apply
Before every coding task: check if a feature branch exists or needs creating. After every logical unit of work: commit. When done: push branch and prepare PR summary, never merge.
