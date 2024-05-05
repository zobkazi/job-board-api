import { z } from "zod";

export const RegistrationTypes = z.object({
  name: z.string(),
  bn_name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  nid: z.string(),
  gender: z.string(),
  photo: z.string().optional(),
});


