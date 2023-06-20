const asyncHandler = require("express-async-handler");
const User = require("../models/user/userModel");
const bcrypt = require("bcrypt");

//Desc Register users
//@route POST /api/user/register
//@access public

const register = asyncHandler(async (req, res) => {
  const { name, email, username, password, cPassword } = req.body;

  // validate
  if (!name || !email || !username || !password || !cPassword) {
    res.status(400);

    throw new Error("Please fill all the fields!");
  }

  // check for existing users
  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);

    throw new Error("User is already registered with this emailId!");
  }

  // check if username is already taken
  const invalidUsername = await User.findOne({ username });

  if (invalidUsername) {
    res.status(400);

    throw new Error(
      "username already taken! Please use another username for this account!"
    );
  }

  // match password and confirm password

  if (password === cPassword) {
    // password hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedCpassword = await bcrypt.hash(cPassword, 10);

    // create a new user
    const newUser = await User.create({
      name,
      email,
      username,
      password: hashedPassword,
      cPassword: hashedCpassword,
    });

    newUser.password = undefined;
    newUser.cPassword = undefined;

    console.log(`New user created ${newUser}`);
    if (newUser) {
      res.status(201).json(newUser);
    } else {
      res.status(400);

      throw new Error("User data is invalid!");
    }
  } else {
    res.status(400);

    throw new Error("passwords do not match! please fill again!");
  }

  res.status(200).json({ message: "new user registered successfully!" });
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
