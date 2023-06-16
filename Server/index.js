const express = require("express");
const app = express();

//middleware
app.use(express.json());

// error handler
const asyncHandler = require("express-async-handler");

//importing routes

const userRoutes = require("./src/routes/userRoutes");

//port
const port = 5000;

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
app.listen(port, () => {
  console.log("Server Running on port 5000...");
});
