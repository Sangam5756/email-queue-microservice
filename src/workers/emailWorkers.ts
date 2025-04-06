import { Worker } from "bullmq";
import { sendEmail } from "../utils/mailer";
import { configDotenv } from "dotenv";
configDotenv();

const connection = {
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT) || 6379,
  maxRetriesPerRequest: null, // <- This is important!
};

new Worker(
  "emailQueue",
  async (job) => {
    const { to, subject, text, html } = job.data;
    await sendEmail(to, subject, text, html);
  },
  {
    connection,
    concurrency: 5,
  }
);
