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
- **Package releases** are tag-driven. When you're ready to publish a package, bump its `package.json` version, merge to `main`, then create and push a matching tag:
  ```bash
  git tag types@0.1.1
  git push origin types@0.1.1
  ```
  Supported tag formats are `types@x.y.z`, `eslint-config@x.y.z`, and `tsconfig@x.y.z`. The release workflow validates that the tag version matches the target package's `package.json` before publishing to npm.
