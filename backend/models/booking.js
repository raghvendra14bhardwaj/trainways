const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String },
    from: { type: String },
    to: { type: String },
    trainName: { type: String },
    birth: { type: String },
  },
  { collection: "booking_details" }
);

const Station = mongoose.model("list_of_stations", bookingSchema);
bookingSchema;
module.exports = Station;
