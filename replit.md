# [Project name]

_Replace the heading above with the project's name, and this line with one sentence describing what this app does for users._

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string
- Required env for Start Now form emails (via Microsoft Graph `sendMail`):
  - `GRAPH_TENANT_ID` — Azure AD tenant ID
  - `GRAPH_CLIENT_ID` — App registration client (application) ID
  - `GRAPH_CLIENT_SECRET` — App registration client secret
  - `START_NOW_TO_EMAIL` — recipient email (default: `chris@vtwo.co`)
  - `START_NOW_FROM_EMAIL` — sender address (default: `noreply@vtwo.co`). **Must exist as a shared mailbox** in the M365 tenant.
  - If the Graph env vars are missing, form submissions still persist to Postgres but no email is sent.
  - The Azure app registration requires the **`Mail.Send`** Application permission with admin consent.
  - **Recommended (defense in depth):** restrict the app to only send as `noreply@vtwo.co` using an Exchange Online application access policy:
    ```powershell
    New-ApplicationAccessPolicy -AppId <GRAPH_CLIENT_ID> \
      -PolicyScopeGroupId noreply@vtwo.co \
      -AccessRight RestrictAccess -Description "Evolve site — send-as noreply only"
    ```
- After pulling the `feat/start-now-form` branch, run `pnpm --filter @workspace/db run push` to apply the new `start_now_submissions` table migration.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
