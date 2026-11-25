import { randomUUID } from "node:crypto";
import type { CreateDeviceInput } from "./device.schema.js";

export interface Device extends CreateDeviceInput {
  id: string;
  createdAt: string;
}

const devices: Device[] = [
  {
    id: "smart-device-demo",
    name: "Premium Smart Device",
    refreshRateHz: 120,
    frameRateFps: 120,
    display: "Dynamic AMOLED 2X",
    audio: ["Dolby Atmos", "DTS:X"],
    description: "Premium display and spatial audio experience.",
    createdAt: "2026-11-25T00:00:00.000Z"
  }
];

export const deviceStore = {
  findAll(): Device[] {
    return [...devices];
  },

  findById(id: string): Device | undefined {
    return devices.find((device) => device.id === id);
  },

  create(input: CreateDeviceInput): Device {
    const device: Device = {
      ...input,
      id: randomUUID(),
      createdAt: new Date().toISOString()
    };
    devices.push(device);
    return device;
  },

  delete(id: string): boolean {
    const index = devices.findIndex((device) => device.id === id);
    if (index === -1) return false;
    devices.splice(index, 1);
    return true;
  }
};
