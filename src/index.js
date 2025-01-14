const express = require("express");
const ConnectDB = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
ConnectDB();

//Middlewares
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Listen the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The server is running on PORT ${PORT}`);
});
