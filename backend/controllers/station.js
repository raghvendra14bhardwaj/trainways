const Station = require("../models/station");

async function getStationList(req, res) {
  const stationList = await Station.find({});
  return res.json({ data: stationList });
}

module.exports = { getStationList };
