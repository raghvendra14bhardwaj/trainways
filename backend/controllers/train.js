const Train = require("../models/train");

async function getTrainList(req, res) {
  const payload = req.body;
  const source = payload.from;
  const destination = payload.to;
  let trainBetweenStations = await Train.find({
    stations: {
      $all: [
        { $elemMatch: { code: source } },
        { $elemMatch: { code: destination } },
      ],
    },
  });
  trainBetweenStations = trainBetweenStations.filter((train) => {
    const station = train.stations;
    const sourceIndex = station.findIndex((s) => s.code === source);
    const destiIndex = station.findIndex((s) => s.code === destination);
    if (sourceIndex < destiIndex) return train;
  });
  return res.json({ data: trainBetweenStations });
}

module.exports = { getTrainList };
