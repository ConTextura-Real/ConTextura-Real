import nodemailer from "nodemailer";

function getMailCredentials() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error("Missing EMAIL_USER or EMAIL_PASS environment variables.");
  }

  return { user, pass };
}

export function createMailer() {
  const { user, pass } = getMailCredentials();

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function sendSiteEmail({ subject, text }) {
  const { user } = getMailCredentials();
  const transporter = createMailer();

  await transporter.sendMail({
    from: user,
    to: user,
    subject,
    text,
  });
}
