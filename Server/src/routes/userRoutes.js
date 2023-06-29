const express = require("express");
const router = express.Router(); // initialize express router

const { isVerifiedUser } = require("../middlewares/isVerifiedUser");

const {
  register,
  signin,
  currentUser,
  signout,
} = require("../controllers/user/userController");

//Authentication Routes

// register route
router.route("/register").post(register);

// login route

router.route("/signin").post(signin);

// current user route
router.route("/").get(isVerifiedUser, currentUser);

// logout route
router.route("/signout").get(signout);
module.exports = router;
