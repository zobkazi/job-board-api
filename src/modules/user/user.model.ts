// module/user/user.model.ts
import { Schema, model, InferSchemaType } from "mongoose";
import bcrypt from "bcryptjs";

// Define the profile sub-schema
const profileSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
    unique: true,
  },
  address: {
    type: String,
    trim: true,
  },
  phonenumber: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  postalcode: {
    type: String,
    trim: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
    enum: ["male", "female", "other"],
  },
  dob: {
    type: String,
    trim: true,
  },
  skills: {
    type: [String],
    trim: true,
  },
  experience: {
    type: String,
    trim: true,
  },
  education: {
    type: [String],
    trim: true,
  },
  certifications: {
    type: [String],
    trim: true,
  },
  languages: {
    type: [String],
    trim: true,
  },
  availability: {
    type: String,
    trim: true,
  },
  availabilityTime: {
    type: String,
    trim: true,
  },
  awards: {
    type: [String],
    trim: true,
  },
  projects: {
    type: [String],
    trim: true,
  },
  website: {
    type: String,
    trim: true,
  },
});

// Define the main user schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["seeker", "employer", "admin"],
      default: "seeker",
    },
    profile: {
      type: profileSchema,
    },
  },
  {
    timestamps: true,
  }
);

// hasj the password before saving the user to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = model("User", userSchema);

export type TUser = InferSchemaType<typeof userSchema>;
export type TProfile = InferSchemaType<typeof profileSchema>;

export default User;
