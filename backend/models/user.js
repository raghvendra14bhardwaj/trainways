const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String },
    mobile: { type: Number, required: true },
    dob: { type: String },
    userId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
  { collection: "user_details" }
);

const User = mongoose.model("list_of_users", userSchema);
module.exports = User;
