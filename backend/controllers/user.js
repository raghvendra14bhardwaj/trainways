const User = require("../models/user");

//Authenticates user against userid and password
async function fetchUser(req, res) {
  const users = await User.find({});
  let checkPassword = false;
  const userIndex = users.findIndex((user) => user.userId === req.body.userId);
  if (userIndex !== -1) {
    checkPassword = users[userIndex].password === req.body.password;
  } else {
    return res.status(200).json({ data: { status: "User does not exists!" } });
  }
  if (userIndex !== -1 && checkPassword)
    return res.status(200).json({ data: { status: "User authenticated" } });
  else if (userIndex !== -1 && !checkPassword)
    return res.status(200).json({ data: { status: "Invalid Password" } });
}

//Creates new user.
async function createUser(req, res) {
  const payload = req.body;
  User.create({
    name: payload.name,
    email: payload.email,
    address: payload.address ?? "NA",
    mobile: payload.mobile,
    dob: payload.dob ?? "NA",
    userId: payload.userId,
    password: payload.password,
  });
  return res
    .status(200)
    .json({ data: { status: `${payload.userId} added successfully!` } });
}

module.exports = { fetchUser, createUser };
