import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendConfirmationEmail(
  to: string,
  firstName: string,
  isAttending: string
) {
  const attendingText =
    isAttending === "yes"
      ? "We’re so happy you’ll be joining us ❤️"
      : "We’re sorry you can’t make it, but thank you for letting us know 💌"

  await transporter.sendMail({
    from: `"Wedding RSVP" <${process.env.SMTP_FROM}>`,
    to,
    subject: "RSVP Confirmation",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Thank you, ${firstName}!</h2>
        <p>${attendingText}</p>
        <p>
          If you need to change anything, feel free to reply to this email.
        </p>
        <p>— With love 💍</p>
      </div>
    `,
  })
}
