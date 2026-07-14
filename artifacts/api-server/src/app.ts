import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import journalPublicRouter from "./routes/journalPublic";
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
// Public journal pages live at the app root (not /api) so URLs stay clean
// (/journal/:slug) — see artifacts/api-server/.replit-artifact/artifact.toml
// for the routing prefix that sends /journal/* to this service.
app.use(journalPublicRouter);

export default app;
