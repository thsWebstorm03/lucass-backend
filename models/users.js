const { MongoUnexpectedServerResponseError } = require("mongodb");
const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "client",
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  lang : {
    type : String,
    default : "English"
  }
}, { timestamps: true });

const User = mongoose.model("users", userSchema);

module.exports = User;