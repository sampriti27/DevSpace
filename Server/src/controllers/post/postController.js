const asyncHandler = require("express-async-handler");
const Post = require("../../models/post/postModel");

//Desc create post
//@route POST /api/v1/users/post/add-post/:userId
//@access private
const addPost = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "Post add route" });
});

//Desc get posts of a user
//@route GET /api/v1/users/post/get-posts/:userId
//@access private
const getPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all posts of user" });
});

//Desc get posts of a user
//@route GET /api/v1/users/post/get-post/:userId
//@access private

const getPost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "post details route" });
});

//Desc delete post
//@route DELETE /api/v1/users/post/get-post/:userId
//@access private

const deletePost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: " delete post route" });
});

module.exports = { addPost, getPosts, getPost, deletePost };
