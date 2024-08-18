import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "username is required",
    invalid_type_error: "username must be a string",
  }),
  name: z.string({
    required_error: "name is required",
    invalid_type_error: "name must be a string",
  }),
  email: z.string({
    required_error: "email is required",
    invalid_type_error: "email must be a string",
  }),
  password: z.string({
    required_error: "password is required",
    invalid_type_error: "password must be a string",
  }),
  role: z.string({
    required_error: "role is required",
    invalid_type_error: "role must be a string",
  }),
  profile: z.object({
    firstname: z.string({
      required_error: "firstname is required",
      invalid_type_error: "firstname must be a string",
    }),
    lastname: z.string({
      required_error: "lastname is required",
      invalid_type_error: "lastname must be a string",
    }),
    address: z.string({
      required_error: "address is required",
      invalid_type_error: "address must be a string",
    }),
    phonenumber: z.string({
      required_error: "phonenumber is required",
      invalid_type_error: "phonenumber must be a string",
    }),
    country: z.string({
      required_error: "country is required",
      invalid_type_error: "country must be a string",
    }),
    city: z.string({
      required_error: "city is required",
      invalid_type_error: "city must be a string",
    }),
    state: z
      .string({
        required_error: "state is required",
        invalid_type_error: "state must be a string",
      })
      .optional(),
    postalcode: z
      .string({
        required_error: "postalcode is required",
        invalid_type_error: "postalcode must be a string",
      })
      .optional(),
    bio: z
      .string({
        required_error: "bio is required",
        invalid_type_error: "bio must be a string",
      })
      .optional(),
    image: z
      .string({
        required_error: "image is required",
        invalid_type_error: "image must be a string",
      })
      .optional(),
    gender: z
      .string({
        required_error: "gender is required",
        invalid_type_error: "gender must be a string",
      })
      .optional(),
    dob: z
      .string({
        required_error: "dob is required",
        invalid_type_error: "dob must be a string",
      })
      .optional(),
    website: z
      .string({
        required_error: "website is required",
        invalid_type_error: "website must be a string",
      })
      .optional(),
  }),
});

export const accessTokenSchema = z.object({
  accessTocken: z.string({
    required_error: "accessTocken is required",
    invalid_type_error: "accessTocken must be a string",
  }),
});
