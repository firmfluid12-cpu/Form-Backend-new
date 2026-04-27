const express = require("express");
const app = express();

// ✅ STEP 1: CORS headers (sabse pehle)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// ✅ STEP 2: OPTIONS (preflight handle)
app.options("*", (req, res) => {
  res.sendStatus(204);
});

app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.post("/submit", (req, res) => {
  console.log("Lead:", req.body);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on", PORT));