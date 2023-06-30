const asyncHandler = require("express-async-handler");
const Post = require("../../models/post/postModel");
const { post } = require("../../routes/postRoutes");

//Desc create post
//@route POST /api/v1/users/post/add-post/:userId
//@access private
const addPost = asyncHandler(async (req, res) => {
  const { postImage, postCaption } = req.body;

  try {
    //validate
    if (!postImage && !postCaption) {
      res.status(422);
      throw new Error("Post cannot be empty!");
    }

    //add the post
    const post = { ...req.body, userId: req.user._id };
    const newPost = Post(post);
    console.log(newPost);
    await newPost.save();

    res
      .status(201)
      .json({ success: true, message: "Post created successfully", newPost });
  } catch (error) {
    throw new Error(error);
  }
});

//Desc get posts of a user
//@route GET /api/v1/users/post/get-posts/:userId
//@access private
const getPosts = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    const getPost = await Post.find({ userId });
    res.status(200).json({ success: true, userId, getPost });
  } catch (error) {
    throw new Error(error);
  }
});

//Desc get posts of a user
//@route GET /api/v1/users/post/get-post/:userId
//@access private

const getPostById = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  try {
    const getPost = await Post.findById(postId);
    res.status(200).json({ success: true, getPost });
  } catch (error) {
    throw new Error(error);
  }
});

//Desc delete post
//@route DELETE /api/v1/users/post/get-post/:userId
//@access private

const deletePost = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  try {
    const deletedPost = await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: "Post Deleted!" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { addPost, getPosts, getPostById, deletePost };
