const express = require("express");
const cors = require("cors");

const app = express();

// ✅ IMPORTANT FIX
app.use(cors({
  origin: "*",   // allow all (for now)
  methods: ["GET","POST"],
}));

app.use(express.json());

// TEST ROUTE
app.get("/", (req,res)=>{
  res.send("Backend Running 🚀");
});

// SUBMIT
app.post("/submit",(req,res)=>{
  console.log("Lead:", req.body);
  res.json({success:true});
});

// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log("Server running on port", PORT);
});