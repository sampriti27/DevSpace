const mongoose = require("mongoose");

// creating the mongoDb user model

const userSchema = mongoose.Schema({
  fullName: {
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
  userID: {
    type: String,
    required: [true, "Please select a valid userId"],
    unique: [true, "userId already taken!"],
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // The password must be at least 8 characters long
        // and contain at least one uppercase letter, one lowercase letter,
        // one digit, and one special character.
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          v
        );
      },
      message:
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
    },
  },
  phone: {
    type: Number,
    required: true,
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
  profilePhoto: {
    type: String,
  },
  bio: {
    type: String,
    validate: {
      validator: function (v) {
        const words = v.trim().split(/\s+/);
        return words.length <= 200;
      },
      message: "Bio should not exceed 200 words.",
    },
  },
});

module.exports = mongoose.model("User", userSchema);
