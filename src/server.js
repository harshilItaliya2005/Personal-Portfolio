// server.js
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
}));

// Basic rate limiter to prevent spam
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 6, // limit each IP to 6 requests per windowMs
  message: { message: "Too many requests — try again later." },
});
app.use("/api/", limiter);

// Nodemailer transporter creation
// Recommended: use SMTP credentials or Gmail App Password / OAuth2
let transporter;
(async () => {
  try {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === "true" || true,
      auth: {
        user: process.env.SMTP_USER, // example: your@gmail.com
        pass: process.env.SMTP_PASS, // app password or SMTP password
      },
    });

    // verify connection configuration
    await transporter.verify();
    console.log("Mail transporter ready");
  } catch (err) {
    console.error("Failed to create transporter:", err.message);
  }
})();

// POST /api/send-email
app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, subject = "New contact form message", message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    // sanitize / basic check
    if (message.length > 5000) {
      return res.status(400).json({ message: "Message too long." });
    }

    const html = generateEmailHTML({ name, email, subject, message });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
      subject: `[Portfolio Contact] ${subject}`,
      text: `New message from ${name} (${email}):\n\n${message}`,
      html,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.messageId);
    return res.json({ message: "Message sent successfully." });
  } catch (err) {
    console.error("Error sending email:", err);
    return res.status(500).json({ message: "Server error sending email." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

function generateEmailHTML({ name, email, subject, message }) {
  // simple responsive HTML template
  return `
    <div style="font-family: Arial, sans-serif; color:#111; line-height:1.4; max-width: 680px; padding: 18px;">
      <h2 style="margin:0 0 8px 0; color:#005bd1;">New message from your portfolio site</h2>
      <p style="margin:0 0 12px 0;"><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
      <p style="margin:0 0 12px 0;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <hr style="border:none; border-top:1px solid #eee; margin:18px 0;" />
      <div style="white-space:pre-wrap; background:#f7f9fc; padding:12px; border-radius:8px;">
        ${escapeHtml(message)}
      </div>
      <p style="margin-top:20px; font-size:13px; color:#555;">Reply to <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    </div>
  `;
}

function escapeHtml(unsafe) {
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
