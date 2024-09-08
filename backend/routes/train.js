const express = require("express");
const router = express.Router();
const { getTrainList } = require("../controllers/train");

router.get("/", getTrainList);

module.exports = router;
