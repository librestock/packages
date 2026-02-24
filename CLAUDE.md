# LibreStock Packages

## Gotchas

- **Barrel generation** only exports `.type.ts` and `.enum.ts` files — other file suffixes are ignored.
- **After adding/removing files** in `types/`, you must run barrels then build in order:
  ```bash
  pnpm --filter @librestock/types barrels
  pnpm --filter @librestock/types build
  ```
  Forgetting the barrels step means new exports won't be available to consumers.
