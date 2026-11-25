import { z } from "zod";

export const createDeviceSchema = z.object({
  name: z.string().trim().min(1).max(100),
  refreshRateHz: z.number().int().positive().default(120),
  frameRateFps: z.number().int().positive().default(120),
  display: z.enum(["Dynamic AMOLED 2X", "Ultra Retina XDR"]),
  audio: z.array(z.enum(["Dolby Atmos", "DTS:X"])).min(1),
  description: z.string().trim().max(500).optional()
});

export type CreateDeviceInput = z.infer<typeof createDeviceSchema>;
