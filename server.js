const express = require("express");
const cors = require("cors");

const app = express();

// ✅ CORS FIX (FULL)
app.use(cors());
app.options("*", cors()); // 🔥 IMPORTANT LINE

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log("Server running on port", PORT);
});