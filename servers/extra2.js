const express = require("express");
var router = express.Router();
const mongo = require("../database/extra2");

//To Reach this file, the link should be http://localhost:9000/extra2

router.get("/", (req, res) => {
  res.send("Extra2 Router Working Fine");
});

// router.get("/blabla", (req, res) => {
//   mongo.blablaFunction(result => {
//     res.json(result);
//   });
// });

module.exports = router;
