const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Enable CORS for all routes

app.get("/api", (req, res) => {
  res.json({
    user: ["userOne", "userTwo"],
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
