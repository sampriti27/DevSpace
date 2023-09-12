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

//Desc get all posts
//@route GET /api/v1/users/post/get-all-posts/
//@access private
const getAllPosts = asyncHandler(async (req, res) => {
  try {
    const allPosts = await Post.find()
      .populate({
        path: "userId", // The field in your Post model that references the User model
        select: "name username photo role", // Specify the fields you want to populate
      })
      .exec();

    res.status(200).json({ success: true, posts: allPosts });
  } catch (error) {
    throw new Error(error);
  }
});

//Desc get posts of a user
//@route GET /api/v1/users/post/get-posts/:userId
//@access private
const getPostsByUser = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    const userPosts = await Post.find({ userId })
      .populate({
        path: "userId", // The field in your Post model that references the User model
        select: "name username photo role", // Specify the fields you want to populate
      })
      .exec();

    res.status(200).json({ success: true, userId, userPosts });
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
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the current user's _id matches the post's userId
    if (req.user._id.toString() === post.userId.toString()) {
      const deletedPost = await Post.findByIdAndDelete(postId);
      return res.status(200).json({ message: "Post Deleted!" });
    } else {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this post." });
    }
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  addPost,
  getPostsByUser,
  getPostById,
  deletePost,
  getAllPosts,
};
