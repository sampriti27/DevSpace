const mongoose = require("mongoose");

// creating the mongoDb user model

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add your full name."],
    },
    email: {
      type: String,
      required: [true, "Please add your email address."],
      unique: [true, "Email address already taken"],
      validate: {
        validator: function (v) {
          return /\S+@\S+\.\S+/.test(v); // validate that email is in a valid format
        },
        message: "Email must be in a valid format",
      },
    },
    username: {
      type: String,
      required: [true, "Please select a valid username"],
      unique: [true, "username already taken!"],
    },
    password: {
      type: String,
      required: true,
    },
    cPassword: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,

      validate: {
        validator: function (v) {
          return /\d{10}/.test(v); // validate that number is a 10-digit number
        },
        message: "Phone number must be a 10-digit number",
      },
    },
    gender: {
      type: String,
    },
    dob: {
      type: Date,
    },
    photo: {
      type: String,
    },
    bio: {
      type: String,
      validate: {
        validator: function (v) {
          const words = v.trim().split(/\s+/);
          return words.length <= 20;
        },
        message: "Bio should not exceed 20 words.",
      },
    },
    role: {
      type: String,
    },
    links: [],
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);
