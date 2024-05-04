import { z } from "zod";

export const UpazilaTypes = z.object({
  id: z.string(),
  district_id: z.string(),
  name: z.string(),
  bn_name: z.string(),
  url: z.string(),
});
