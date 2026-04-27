app.post("/submit", async (req, res) => {
  console.log("Lead:", req.body); // ✅ ye tumhara existing flow

  const { email } = req.body;
console.log("Email:", email);

  // 🔢 OTP generate
  const otp = Math.floor(100000 + Math.random() * 900000);
  console.log("OTP:", otp);

  // 📧 Email setup
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

  res.json({ success: true }); // 🔥 lead flow safe
} catch (error) {
  console.log("❌ EMAIL ERROR:", error);
  res.json({ success: false });
}