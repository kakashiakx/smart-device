import { describe, expect, it } from "vitest";
import { createDeviceSchema } from "../src/models/device.schema.js";

describe("createDeviceSchema", () => {
  it("accepts a premium smart-device specification", () => {
    const result = createDeviceSchema.safeParse({
      name: "Premium Smart Device",
      refreshRateHz: 120,
      frameRateFps: 120,
      display: "Dynamic AMOLED 2X",
      audio: ["Dolby Atmos", "DTS:X"]
    });

    expect(result.success).toBe(true);
  });

  it("rejects an unsupported display", () => {
    const result = createDeviceSchema.safeParse({
      name: "Device",
      display: "Legacy LCD",
      audio: ["Stereo"]
    });

    expect(result.success).toBe(false);
  });
});
