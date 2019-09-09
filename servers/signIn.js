const express = require("express");
var router = express.Router();
const mongo = require("../database/signIn");

//To Reach this file, the link should be http://localhost:9000/signIn

router.get("/", (req, res) => {
  res.send("signIn Router Working Fine");
});

// router.get("/blabla", (req, res) => {
//   mongo.blablaFunction(result => {
//     res.json(result);
//   });
// });


module.exports = router;
