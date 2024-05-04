import error = require("./utils/error");
import app from "./app";

import router from "./routes";
import mongoose from "mongoose";
import division from "@/routes/division";
import districts from "@/routes/districts";

import cors from "cors";

app.use(cors());

// connect to db
mongoose
  .connect("mongodb://localhost:27017/job-board-db", {})
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

// routes

app.use("/api", router);
app.use("/api", division);
app.use("/api", districts);

//  handler
app.use(error.notFound);
app.use(error.serverError);
