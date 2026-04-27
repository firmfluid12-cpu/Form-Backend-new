const express = require("express");
const cors = require("cors");

const app = express();

// ✅ CORS FIX (IMPORTANT)
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// 🔥 VERY IMPORTANT
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());

// ROOT
app.get("/", (req,res)=>{
  res.send("Backend Running 🚀");
});

// HANDLE PREFLIGHT
app.options("*", (req,res)=>{
  res.sendStatus(200);
});

// SUBMIT
app.post("/submit",(req,res)=>{
  console.log("Lead:", req.body);
  res.json({success:true});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log("Server running on port", PORT);
});