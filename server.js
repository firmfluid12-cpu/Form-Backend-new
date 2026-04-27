app.post("/submit", async (req, res) => {
  console.log("Lead:", req.body); // ✅ ye tumhara existing flow

  const { email } = req.body;
console.log("Email:", email);

  // 🔢 OTP generate
  const otp = Math.floor(100000 + Math.random() * 900000);
  console.log("OTP:", otp);

  // 📧 Email setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "firmfluid12@gmail.com",
      pass: "wbfr jhbe turw cpzg"
    }
  });

  const mailOptions = {
    from: "firmfluid12@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is: ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);

    // ✅ response same jaisa pehle tha (important)
    res.json({ success: true });

  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});