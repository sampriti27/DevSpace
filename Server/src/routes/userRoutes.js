const express = require("express");
const router = express.Router(); // initialize express router

const {
  register,
  signin,
  currentUser,
  signout,
} = require("../controllers/userController");

//Authentication Routes

// register route
router.route("/register").post(register);

// login route

router.route("/signin").post(signin);

// current user route
router.route("/").get(currentUser);

// logout route
router.route("/signout").get(signout);
module.exports = router;
