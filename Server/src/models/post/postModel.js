const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },
    caption: {
      type: String,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        comment: {
          type: String,
        },
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        time: {
          type: String,
        },
      },
    ],
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
