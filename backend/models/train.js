const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema(
  {
    train_no: { type: {} },
    origin: { type: String },
    destination: { type: {} },
    stations: { type: [] },
  },
  { collection: "train_details" }
);

const Train = mongoose.model("list_of_trains", trainSchema);

module.exports = Train;
