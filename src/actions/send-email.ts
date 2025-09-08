'use server'
import nodemailer from "nodemailer"

interface EmailPayload {
  fullName: string
  email: string
  country: string
  message: string
}

export async function sendEmail(payload: EmailPayload) {
  const { fullName, email, country, message } = payload

  const {
    EMAIL_HOST,
    EMAIL_PORT,
    EMAIL_USER,
    EMAIL_PASS,
    EMAIL_FROM_NAME,
    BRAND_NAME,
    SUPPORT_EMAIL,
  } = process.env

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("❌ EMAIL_USER or EMAIL_PASS not configured in .env")
    return { success: false, error: "SMTP not configured" }
  }

  const htmlBody = `
  <div style="font-family: sans-serif; background: #f6f8fb; padding: 24px;">
    <div style="max-width: 640px; margin: auto; background: #fff; border-radius: 16px; padding: 24px; box-shadow: 0 6px 24px rgba(20,23,38,.06);">
      <h2 style="color:#4f46e5;">New Contact Message</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Message:</strong><br/>${message}</p>
      <hr style="margin: 16px 0;" />
      <p style="font-size: 12px; color: #6b7280;">
        This message was sent to ${EMAIL_USER} via ${BRAND_NAME}.<br/>
        Contact support: <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>
      </p>
    </div>
  </div>
  `

  const textBody = `
New Contact Message

Full Name: ${fullName}
Email: ${email}
Country: ${country}
Message:
${message}

— ${BRAND_NAME}
Contact support: ${SUPPORT_EMAIL}
  `

  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT),
      secure: Number(EMAIL_PORT) === 465,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${EMAIL_FROM_NAME}" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      subject: `New Contact Form Message from ${fullName}`,
      text: textBody,
      html: htmlBody,
    })

    console.log(`✅ Email sent from ${fullName} <${email}>`)
    return { success: true }
  } catch (error) {
    console.error("❌ Failed to send email:", error)
    return { success: false, error }
  }
}
