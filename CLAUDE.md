# LibreStock Packages - Agent Context

> Shared configuration and types for the LibreStock monorepo workspace.

## Sub-packages

### `eslint-config/`
Shared ESLint flat config (`base.js`) used by all repos. No build step.

### `tsconfig/`
Shared TypeScript configs: `base.json` (general), `nestjs.json` (backend). No build step.

### `types/`
Shared TypeScript interfaces and enums (`@librestock/types`). Dual ESM/CJS build.

**Domain modules:** areas, audit-logs, auth, branding, categories, common, inventory, locations, products.

**Key auth types:**
- `UserRole` enum: `ADMIN`, `WAREHOUSE_MANAGER`, `PICKER`, `SALES`
- `Resource` enum: `DASHBOARD`, `STOCK`, `PRODUCTS`, `LOCATIONS`, `INVENTORY`, `AUDIT_LOGS`, `USERS`, `SETTINGS`
- `Permission` enum: `READ`, `WRITE`
- `CurrentUserResponseDto` (id, name, email, image, roles), `ProfileResponseDto`, `SessionClaimsResponseDto`

**Build:**
```bash
pnpm --filter @librestock/types build
```

**Barrel generation:** Auto-generates `index.ts` barrel files for each domain module:
```bash
pnpm --filter @librestock/types barrels   # runs scripts/generate-barrels.mjs
```

Run `barrels` after adding new files, then `build` to compile.

## Commands

```bash
pnpm --filter @librestock/types build     # Build types (ESM + CJS)
pnpm --filter @librestock/types barrels   # Regenerate barrel exports
```
