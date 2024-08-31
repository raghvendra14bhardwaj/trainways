const express = require("express");
const router = express.Router();
const { fetchUser, createUser } = require("../controllers/user.js");

router.post("/getUser", fetchUser);
router.post("/", createUser);

module.exports = router;
