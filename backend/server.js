require("dotenv").config();
const express = require("express");
const connectSQL = require("./src/config/sql");


const app = express();
app.use(express.json());

// Kết nối database
connectSQL();

app.get("/", (req, res) => {
  res.send("Backend connected to SQL Server + MongoDB 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
