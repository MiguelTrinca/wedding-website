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
  const attendingText1st =
    isAttending === "yes"
      ? "Estamos muito felizes por poder contar com a sua presença ❤️"
      : "Temos muita pena por não poder estar presente."
  
      const attendingText2nd =
    isAttending === "yes"
      ? "Se precisar de fazer alguma alteração, sinta-se à vontade para responder diretamente a este email."
      : "Caso a sua resposta venha a mudar, por favor informe-nos diretamente através deste email."

  await transporter.sendMail({
    from: `"Wedding RSVP" ${process.env.SMTP_FROM}`,
    to,
    subject: "RSVP Confirmation",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Obrigado, ${firstName}!</h2>
        <p>${attendingText1st}</p>
        <p>${attendingText2nd}</p>
        <p>Até breve 💍</p>
      </div>
    `,
  })
}