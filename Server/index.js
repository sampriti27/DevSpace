const express = require("express");
const app = express();

//middleware
app.use(express.json());

// error handler
const asyncHandler = require("express-async-handler");
const errorHandler = require("./src/middlewares/errorHandler");

//initializing dotenv
require("dotenv").config();

//database connectioon
const connectDb = require("./src/config/db");
connectDb();

//importing routes
const userRoutes = require("./src/routes/userRoutes");

//port
const PORT = process.env.PORT || 3000;

//main api endpoint
app.get(
  "/",
  asyncHandler((req, res) => {
    res.json({ message: "DevSpace server endpoint!" });
  })
);

//user management endpoint
app.use("/api/users", userRoutes);

// server
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT} ...`);
});