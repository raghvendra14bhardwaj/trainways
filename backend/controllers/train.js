const Train = require("../models/train");

async function getTrainList(req, res) {
  const payload = req.body;
  console.log(payload);
  const source = payload.from;
  const destination = payload.to;
  const trainList = await Train.find({
    stations: {
      $all: [
        { $elemMatch: { code: source } }, // Match for source station code
        { $elemMatch: { code: destination } }, // Match for destination station code
      ],
    },
  });
  return res.json({ data: trainList });
}

module.exports = { getTrainList };
