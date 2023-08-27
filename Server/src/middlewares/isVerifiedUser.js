const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/user/userModel");

const isVerifiedUser = asyncHandler(async (req, res, next) => {
  let token;

  //get the token from frontend

  let authHeader = req.header.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    //verify the token

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(401);

        throw new Error("Unauthorized user!");
      }

      // console.log(decoded);
      const { _id } = decoded;
      User.findById(_id).then((userData) => {
        req.user = userData;
        next();
      });
    });

    //token expired or not found

    if (!token) {
      res.status(401);

      throw new Error("User unauthorized or token missing!");
    }
  }
});

module.exports = { isVerifiedUser };
