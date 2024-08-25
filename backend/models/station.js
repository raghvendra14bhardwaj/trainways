const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema(
  {
    sc: { type: String },
    en: { type: String },
    hi: { type: String },
    ps: { type: Boolean },
    ec: { type: String },
    hc: { type: String },
    se: { type: String },
    sh: { type: String },
    tg: { type: String },
  },
  { collection: "station_list" }
);

const Station = mongoose.model("list_of_stations", stationSchema);

module.exports = Station;
