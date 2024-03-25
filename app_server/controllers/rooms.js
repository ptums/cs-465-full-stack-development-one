var fs = require("fs");
var roomsData = JSON.parse(fs.readFileSync("./data/rooms.json", "utf-8"));

/* GET Rooms page */
const rooms = (req, res) => {
  res.render("rooms", { title: "Travlr Getaways", roomsData });
};

module.exports = {
  rooms,
};
