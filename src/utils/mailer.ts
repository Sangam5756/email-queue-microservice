import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: +process.env.MAIL_PORT!,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});
// Verify transporter connection once at the start
transporter.verify((error, success) => {
  if (error) {
    console.error("Error verifying transporter:", error);
  } else {
    console.log("Transporter verified and ready to send emails.");
  }
});

export const sendEmail = async (
  to: string,
  subject: string,
  text: string,
  html?: string
) => {
  await transporter.sendMail({
    from: `"No Reply" <${process.env.MAIL_USER}>`,
    to,
    subject,
    text,
    ...(html && { html }),
  });
};
