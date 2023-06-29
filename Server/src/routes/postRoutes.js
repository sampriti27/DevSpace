const express = require("express");
const router = express.Router(); // initialise router
const { isVerifiedUser } = require("../middlewares/isVerifiedUser"); //middleware
const {
  addPost,
  getPosts,
  getPost,
  deletePost,
} = require("../controllers/post/postController");

//post router

router.route("/add-post/:userId").post(isVerifiedUser, addPost);

router.route("/get-posts/:userId").get(isVerifiedUser, getPosts);

router.route("/get-post/:postId").get(isVerifiedUser, getPost);

router.route("/delete-post/:postId").delete(isVerifiedUser, deletePost);

module.exports = router;