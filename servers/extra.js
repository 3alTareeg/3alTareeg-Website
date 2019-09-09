const express = require("express");
var router = express.Router();
const mongo = require("../database/extra");

//To Reach this file, the link should be http://localhost:9000/extra

router.get("/", (req, res) => {
  res.send("Extra Router Working Fine");
});

// router.get("/blabla", (req, res) => {
//   mongo.blablaFunction(result => {
//     res.json(result);
//   });
// });

module.exports = router;
