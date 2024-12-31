const mongoose = require("mongoose");

const Roles = {
  USER: "User",
  ADMIN: "Admin",
  MANAGER: "Manager",
};

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(Roles),
    default: Roles.USER,
  },
}, {timestamps: true});


module.exports = mongoose.model("User", userSchema);
