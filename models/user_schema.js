const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name of the user is required"]
    },
    username: {
      type: String,
      unique: true,
      required: [true, "Username must be provided and unique"]
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email must be unique and provided"]
    },
    mobile: {
      type: Number,
      unique: true,
      required: [true, "Mobile number is required"]
    },
    admin: {
      type: Boolean,
      default: false
    }
});

module.exports = mongoose.model('User', userSchema);
