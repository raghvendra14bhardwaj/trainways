const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: { type: String },
    from: { type: String },
    to: { type: String },
    trainName: { type: String },
    birth: { type: String },
    dateOfJourney: { type: String },
  },
  { collection: "booking_details" }
);

const Station = mongoose.model("list_of_bookings", bookingSchema);
bookingSchema;
module.exports = Station;
