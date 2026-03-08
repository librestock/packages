# LibreStock Packages

## Issue tracking

Before starting work on any issue, ensure it is added to the **[LibreStock Improvements Tracker](https://github.com/orgs/librestock/projects/2)** GitHub Project. Move the issue to "In Progress" when starting and "Done" when complete.

## Gotchas

- **Barrel generation** only exports `.type.ts` and `.enum.ts` files — other file suffixes are ignored.
- **After adding/removing files** in `types/`, you must run barrels then build in order:
  ```bash
  pnpm --filter @librestock/types barrels
  pnpm --filter @librestock/types build
  ```
  Forgetting the barrels step means new exports won't be available to consumers.
- **Package releases** are version-bump driven. If you change `types/`, `eslint-config/`, or `tsconfig/`, bump that package's `package.json` version in the same PR. After the PR merges to `main`, CI builds the workspace, publishes any bumped packages to npm, and then creates the matching git tags.
- The generated tags use these formats:
  ```bash
  types@0.1.1
  eslint-config@0.1.1
  tsconfig@0.1.1
  ```
