import { Schema, model } from "mongoose";

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
      unique: true,
    },
    name: {
      type: String,
      required: [false, "Name is optional"],
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
      required: [false, "Profile is optional"],
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
