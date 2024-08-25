const express = require("express");
const router = express.Router();
const { getStationList } = require("../controllers/station.js");

router.get("/", getStationList);

module.exports = router;
