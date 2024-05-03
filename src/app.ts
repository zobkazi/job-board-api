import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "UP" });
});



const port = process.env.PORT || 4001;
const serviceName = process.env.SERVICE_NAME || "User-Service";

app.listen(port, () => {
  console.log(`${serviceName} is running on port ${port}`);
});

export default app;