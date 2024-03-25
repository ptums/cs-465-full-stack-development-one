var fs = require("fs");
var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf-8"));

const Mongoose = require("../models/db");
const Trip = require("../models/travlr");

const getTrips = async () => {
  const data = await Trip.find({});
  console.log("data", data);

  return data;
};

/* GET Travel page */
const travel = async (req, res) => {
  const trips = await getTrips();
  res.render("travel", { title: "Travlr Getaways", trips });
};

module.exports = {
  travel,
};
