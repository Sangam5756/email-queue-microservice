import express from "express";
import { configDotenv } from "dotenv";
import { router } from "./routes/routes";
import "./workers/emailWorkers";
configDotenv();
import { printAllJobs } from "./job";

const app = express();
printAllJobs(); // Call after server starts
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Welcome to the Redis Cache API");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
