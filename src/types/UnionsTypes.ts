import { z } from "zod";

export const UnionType = z.object({
  id: z.string(),
  upazilla_id: z.string(),
  name: z.string(),
  bn_name: z.string(),
  url: z.string(),
});
