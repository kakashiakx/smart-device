import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

import { deviceRouter } from "./routes/device.routes.js";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors());
  app.use(express.json({ limit: "1mb" }));

  app.get("/health", (_request, response) => {
    response.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.use("/api/v1/devices", deviceRouter);

  app.use((_request, response) => {
    response.status(404).json({ error: "Route not found" });
  });

  app.use((error: unknown, _request: Request, response: Response, _next: NextFunction) => {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  });

  return app;
}
