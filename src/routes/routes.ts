import expres, { Request, Response } from "express";
import { emailQueue } from "../jobs/emailQueue";

export const router = expres.Router();

router.post("/send", async (req: Request, res: Response): Promise<any> => {
  const { to, subject, text, html } = req.body;
  await emailQueue.add(
    "send_email",
    { to, subject, text, html },
    {
      attempts: 5,
      backoff: {
        type: "exponential",
        delay: 1000,
      },
      removeOnComplete: true,
      removeOnFail: {
        count: 5,
      },
    }
  );

  res.status(200).json({
    message: "Email job successfully added to queue",
  });
});
