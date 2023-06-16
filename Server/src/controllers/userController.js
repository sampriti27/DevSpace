const asyncHandler = require("express-async-handler");

//Desc Register users
//@route POST /api/user/register
//@access public

const register = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register route!" });
});

//Desc Login users
//@route POST /api/user/signin
//@access public

const signin = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Login route!" });
});

//Desc current user
//@route GET /api/user/
//@access public

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Current logged in user route!" });
});

//Desc logout user
//@route GET /api/user/signout
//@access public

const signout = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout route!" });
});

module.exports = { register, signin, currentUser, signout };
