const express = require("express");
const app = express();
const mongoose = require("mongoose");

// If not in production then use values from env file
if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config();
}

// MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.log("Connection to MongoDB Failed"));

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/user"));

// Server Config
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
