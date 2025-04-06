import Redis from "ioredis";
import { Queue } from "bullmq";

const connection = {
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT) || 6379,
  maxRetriesPerRequest: null, // <- This is important!
};

export const emailQueue = new Queue("emailQueue", { connection });
