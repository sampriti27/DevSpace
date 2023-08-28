const express = require("express");
const router = express.Router(); // initialize express router

const { isVerifiedUser } = require("../middlewares/isVerifiedUser");

const {
  register,
  signin,
  currentUser,
  updateProfile,
  signout,
  uploadPhoto,
} = require("../controllers/user/userController");

//Authentication Routes

// register route
router.route("/register").post(register);

// login route

router.route("/signin").post(signin);

// current user route
router.route("/").get(isVerifiedUser, currentUser);

// update profile route
router.route("/update-profile/:id").put(isVerifiedUser, updateProfile);

//upload photo
router.route("/upload-photo/:id").patch(isVerifiedUser, uploadPhoto);

// logout route
router.route("/signout").get(signout);
module.exports = router;
