
import error = require("./utils/error");
import app from "./app";

import router from "./routes";
import mongoose from "mongoose";



import cors from 'cors';

app.use(cors());

// connect to db
mongoose.connect("mongodb://localhost:27017/job-board-db", {
    
}).then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
})

// routes

app.use("/api", router);


//  handler
app.use(error.notFound);
app.use(error.serverError);
