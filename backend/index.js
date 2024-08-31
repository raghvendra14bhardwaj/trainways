const express = require("express");
const cors = require("cors");
const stationRouter = require("./routes/station");
const userRouter = require("./routes/user");
const { connectDatabase } = require("./connection");
const app = express();
const PORT = 8000;

//Middleware
app.use(express.urlencoded({ extended: false })); //Postman
app.use(express.json()); //React json
//Establish connection with database
connectDatabase();

//Routes
app.use(cors());
app.use("/stationList", stationRouter);
app.use("/user", userRouter);

app.listen(PORT, () =>
  console.log(`Trainways Services are Up at PORT ${PORT}!!`)
);
