const express = require("express");
const stationRouter = require("./routes/station");
const { connectDatabase } = require("./connection");
const app = express();
const PORT = 8000;

//Establish connection with database
connectDatabase();

//Routes
app.use("/stationList", stationRouter);

app.listen(PORT, () =>
  console.log(`Trainways Services are Up at PORT ${PORT}!!`)
);
