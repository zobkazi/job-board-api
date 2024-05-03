import { z } from "zod";

export const DivisionTypes = z.object({
  name: z.string(),
  bn_name: z.string(),
  url: z.string(),
});
