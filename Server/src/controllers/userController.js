const asyncHandler = require("express-async-handler");
const User = require("../models/user/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  // check if username is already taken
  const invalidUsername = await User.findOne({ username });

  if (userAvailable) {
    res.status(400);

    throw new Error("Email or username already exist!");
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
      res.status(200).json({ message: "new user registered successfully!" });
    } else {
      res.status(400);

      throw new Error("User data is invalid!");
    }
  } else {
    res.status(400);

    throw new Error("passwords do not match! please fill again!");
  }
});

//Desc Login users
//@route POST /api/user/signin
//@access public

const signin = asyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body;

    //validate
    if (!username || !password) {
      res.status(400);

      throw new Error("Please fill all the fields");
    }

    // check the user existance

    const user = await User.findOne({ username });

    if (user) {
      //match the user provided password and stored password

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(401);

        throw new Error("Invalid username or password!");
      } else {
        // make the user password as undefined
        user.password = undefined;
        user.cPassword = undefined;

        //generate token
        const accessToken = jwt.sign(
          { _id: user._id },
          process.env.JWT_SECRET_KEY
        );

        res
          .status(200)
          .json({ message: "User logged in successfully!", user, accessToken });
      }
    } else {
      res.status(400);

      throw new Error("User does not exist!");
    }
  } catch (error) {
    throw new Error(error);
  }
  res.status(200).json({ message: "Login route!" });
});

//Desc current user
//@route GET /api/user/
//@access protected

const currentUser = asyncHandler(async (req, res) => {
  try {
    const user = await Client.findById(req.user._id);
    res.json({ message: "this is current user", user });
  } catch (error) {
    res.json(error);
  }
});

//Desc logout user
//@route GET /api/user/signout
//@access public

const signout = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({ sucess: "true" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { register, signin, currentUser, signout };
