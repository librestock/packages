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
- **Package releases** are managed with Changesets from the repo root. If you change `types/`, `eslint-config/`, or `tsconfig/`, add a changeset before merging:
  ```bash
  pnpm changeset
  ```
  The release workflow will open or update the automated release PR on `main` and publish changed packages to npm after that PR is merged.
