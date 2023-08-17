const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

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
const postRoutes = require("./src/routes/postRoutes");

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
app.use("/api/v1/users", userRoutes);

//post management API endpoints
app.use("/api/v1/users/post", postRoutes);

app.use(errorHandler);

// server
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT} ...`);
});
