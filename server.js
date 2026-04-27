const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.options("*", (req, res) => {
  res.sendStatus(204);
});

app.use(express.json());

// ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// 🔥 EMAIL API
app.post("/submit", async (req, res) => {
  console.log("Lead:", req.body);

  const { email } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000);
  console.log("OTP:", otp);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "firmfluid12@gmail.com",
      pass: "wbfrjhbeturwcpzg"
    }
  });

  const mailOptions = {
    from: "firmfluid12@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is: ${otp}`
  };

  try {
    console.log("🚀 Sending email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ EMAIL SENT:", info.response);

    res.json({ success: true });
  } catch (error) {
    console.log("❌ EMAIL ERROR:", error);
    res.json({ success: false });
  }
});

// SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));