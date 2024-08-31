const User = require("../models/user");

async function fetchUser(req, res) {
  const users = await User.find({});
  console.log(req.body, "request body");
  const isAuthenticated = users.find(
    (user) =>
      user.userId === req.body.userId && user.password === req.body.password
  );
  if (isAuthenticated)
    return res.status(200).json({ data: { authenticated: "true" } });
  else return res.status(200).json({ data: { authenticated: "false" } });
}

async function createUser(req, res) {
  const payload = req.body;
  if (
    !payload ||
    !payload.name ||
    !payload.email ||
    !payload.mobile ||
    !payload.userId ||
    !payload.password
  ) {
    return res.status(402).json({ error: "Missing user details!" });
  } else {
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
}

module.exports = { fetchUser, createUser };
