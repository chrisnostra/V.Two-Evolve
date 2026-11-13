# V.Two Evolve — single-container deploy (Railway)
# One service serves the marketing site (static, built by Vite) and the API
# (/api/healthz, /api/start-now) so the frontend can post same-origin.

FROM node:24-bookworm-slim

# Corepack provides pnpm; version pinned by packageManager field in pnpm-workspace.yaml.
RUN corepack enable && corepack prepare pnpm@11.21.0 --activate

WORKDIR /app

# --- Install dependencies (workspace-aware, reproducible) ---
# Copy only the files pnpm needs to resolve the workspace first, for layer caching.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY artifacts/api-server/package.json artifacts/api-server/
COPY artifacts/vtwo-evolve/package.json artifacts/vtwo-evolve/
COPY artifacts/mockup-sandbox/package.json artifacts/mockup-sandbox/
COPY lib/api-client-react/package.json lib/api-client-react/
COPY lib/api-spec/package.json lib/api-spec/
COPY lib/api-zod/package.json lib/api-zod/
COPY lib/db/package.json lib/db/
COPY scripts/package.json scripts/

# --frozen-lockfile keeps CI deploys deterministic.
# minimumReleaseAge (1 day) is enforced via pnpm-workspace.yaml — do not disable.
RUN pnpm install --frozen-lockfile

# --- Copy sources and build ---
COPY . .

# Build both artifacts. vite.config.ts hard-requires PORT and BASE_PATH at
# config-load time, so set them explicitly. BASE_PATH=/ for root-domain hosting.
ENV PORT=3000
ENV BASE_PATH=/
RUN pnpm --filter @workspace/vtwo-evolve build \
 && pnpm --filter @workspace/api-server build

# --- Runtime ---
ENV NODE_ENV=production
# Railway injects PORT at runtime; this is only a local/default fallback.
ENV PORT=3000
EXPOSE 3000

# Healthcheck hits the API liveness endpoint.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/api/healthz').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "--enable-source-maps", "artifacts/api-server/dist/index.mjs"]
