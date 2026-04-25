const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server chal raha hai 🚀");
});

app.post("/submit", async (req, res) => {
  const { name, email, phone } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "support@firmfluid.com",      // 👉 apna email
      pass: "Nindr1646@",         // 👉 yaha apna NEW password daalo
    },
  });

  let mailOptions = {
    from: "support@firmfluid.com",
    to: "support@firmfluid.com",
    subject: "New Form Submission",
    text: `Name: ${name}, Email: ${email}, Phone: ${phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully ✅");
  } catch (error) {
    console.log(error);
    res.send("Error sending email ❌");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});