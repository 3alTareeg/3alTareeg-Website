const express = require("express");
var router = express.Router();
const mongo = require("../database/drivers");

//To Reach this file, the link should be http://localhost:9000/drivers

router.get("/", (req, res) => {
  res.send("Drivers Router Working Fine");
});

// router.get("/blabla", (req, res) => {
//   mongo.blablaFunction(result => {
//     res.json(result);
//   });
// });

module.exports = router;
