import { Router } from "express";
import { createDeviceSchema } from "../models/device.schema.js";
import { deviceStore } from "../store/device.store.js";

export const deviceRouter = Router();

deviceRouter.get("/", (_request, response) => {
  response.json({ data: deviceStore.findAll() });
});

deviceRouter.get("/:id", (request, response) => {
  const device = deviceStore.findById(request.params.id);
  if (!device) {
    response.status(404).json({ error: "Device not found" });
    return;
  }
  response.json({ data: device });
});

deviceRouter.post("/", (request, response) => {
  const result = createDeviceSchema.safeParse(request.body);
  if (!result.success) {
    response.status(400).json({
      error: "Invalid device data",
      issues: result.error.issues
    });
    return;
  }

  const device = deviceStore.create(result.data);
  response.status(201).json({ data: device });
});

deviceRouter.delete("/:id", (request, response) => {
  if (!deviceStore.delete(request.params.id)) {
    response.status(404).json({ error: "Device not found" });
    return;
  }
  response.status(204).send();
});
