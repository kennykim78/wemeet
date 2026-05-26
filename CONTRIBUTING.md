# Contributing Guide

## Styling Rule: SCSS Is The Source Of Truth

To keep the codebase consistent, follow this rule:

- Do not edit files in `css/*.css` manually.
- Always edit files in `scss/*.scss`.
- After SCSS changes, regenerate CSS with:
  - `npm run build:css` (one-time)
  - `npm run watch:css` (during development)

## Commit Rule For Styles

When a commit includes changes under `css/*.css`, it must also include the matching `scss/*.scss` source changes.

Examples:

- If `css/index.css` changes, `scss/index.scss` must also be changed in the same commit.
- If `css/project.css` changes, `scss/project.scss` must also be changed in the same commit.

A pre-commit hook is provided to enforce this rule.

## One-Time Hook Setup

Run this once in your local repository:

```bash
npm run setup:hooks
```

After that, every commit will run the SCSS source-of-truth check automatically.
