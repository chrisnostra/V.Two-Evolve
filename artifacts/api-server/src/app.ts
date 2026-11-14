import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// ---------------------------------------------------------------------------
// Static serving of the marketing site (artifacts/vtwo-evolve/dist/public).
//
// Railway/single-container hosting requires ONE service to serve both the
// static site (same-origin for /api/start-now) and the API. On Replit the
// static artifact is served separately, so this is additive and inert there
// when the dist folder does not exist.
// ---------------------------------------------------------------------------
import path from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";

const staticRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
  "vtwo-evolve",
  "dist",
  "public",
);

// BASE_PATH is baked into the built assets (vite `base`) and must match at
// runtime for index.html/asset paths to resolve. Defaults to "/".
const basePath = (process.env.BASE_PATH ?? "/").replace(/\/*$/, "/");

if (existsSync(path.join(staticRoot, "index.html"))) {
  const indexHtml = path.join(staticRoot, "index.html");

  // Serve built assets under the configured base path (e.g. /assets/*).
  app.use(basePath, express.static(staticRoot, { index: false }));

  // SPA fallback: any non-/api GET request gets index.html.
  app.use((req, res, next) => {
    if (req.method !== "GET" && req.method !== "HEAD") return next();
    if (req.path.startsWith("/api")) return next();
    res.sendFile(indexHtml);
  });
} else {
  logger.warn(
    { staticRoot },
    "Static site dist not found — serving API only",
  );
}

export default app;
