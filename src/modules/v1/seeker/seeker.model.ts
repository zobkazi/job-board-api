import { Schema, model } from "mongoose";

const seekerSchema = new Schema(
  {
    user_id: {
      Schema: Schema.Types.ObjectId,
      ref: "User",
    },
    job_id: {
      Schema: Schema.Types.ObjectId,
      ref: "Job",
    },
    resumeUrl: {
      type: String,
    },
    coverLetter: {
      type: String,
    },
    coverLetterUrl: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Seeker = model("Seeker", seekerSchema);

export default Seeker;
