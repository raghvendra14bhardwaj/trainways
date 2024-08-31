const Booking = require("../models/booking");

async function getBookingList(req, res) {
  const bookingList = await Booking.find({});
  return res.json(bookingList);
}

module.exports = { getBookingList };
