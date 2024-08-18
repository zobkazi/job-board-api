import { z } from "zod";

export const AccessTokenSchema = z.object({
  accessTocken: z.string({
    required_error: "accessTocken is required",
    invalid_type_error: "accessTocken must be a string",
  }),
});
