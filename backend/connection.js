const mongoose = require("mongoose");

async function connectDatabase() {
  return await mongoose
    .connect("mongodb://127.0.0.1:27017/trainways")
    .then(() => console.log("Mongo DB connected!!"))
    .catch((error) => console.log("Oops!! Mongo DB not connected.", error));
}

module.exports = { connectDatabase };
