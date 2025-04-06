import { emailQueue } from "./jobs/emailQueue";
export const printAllJobs = async () => {
  const jobs = await emailQueue.getJobs([
    "waiting",
    "active",
    "completed",
    "failed",
    "delayed",
  ]);

  console.log(`🧾 Found ${jobs.length} job(s) in the queue:`);

  for (const job of jobs) {
    const state = await job.getState();
    console.log(`📦 Job ID: ${job.id}`);
    console.log(`   Name: ${job.name}`);
    console.log(`   Status: ${state}`);
    console.log(`   Data:`, job.data);
  }
};

console.log("🧾 All jobs in the queue have been printed.");
