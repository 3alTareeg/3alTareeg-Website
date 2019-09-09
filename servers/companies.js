const express = require("express");
var router = express.Router();
const mongo = require("../database/companies");

//To Reach this file, the link should be http://localhost:9000/companies

router.get("/", (req, res) => {
  res.send("Companies Router Working Fine");
});

// router.get("/blabla", (req, res) => {
//   mongo.blablaFunction(result => {
//     res.json(result);
//   });
// });

module.exports = router;
