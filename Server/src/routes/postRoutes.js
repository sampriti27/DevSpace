const express = require("express");
const router = express.Router(); // initialise router
const { isVerifiedUser } = require("../middlewares/isVerifiedUser"); //middleware
const {
  addPost,
  getPosts,
  getPostById,
  deletePost,
} = require("../controllers/post/postController");

//post routes for user post

router.route("/add-post/").post(isVerifiedUser, addPost);

router.route("/get-posts/").get(isVerifiedUser, getPosts);

router.route("/get-post/:postId").get(isVerifiedUser, getPostById);

router.route("/delete-post/:postId").delete(isVerifiedUser, deletePost);

module.exports = router;
