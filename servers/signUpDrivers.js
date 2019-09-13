const express = require("express");
var router = express.Router();
const mongo = require("../database/signUpDrivers");

//To Reach this file, the link should be http://localhost:9000/signUp

router.get("/", (req, res) => {
  res.send("signUp Router Working Fine");
});

// router.get("/blabla", (req, res) => {
//   mongo.blablaFunction(result => {
//     res.json(result);
//   });
// });

router.post("/CreateUser", (req, res) => {
  console.log(req.body);
  mongo.createUser(req.body, result => {
    res.json(result);
  });
});

router.post("/getUsers", (req, res) => {
  console.log(req.body);
  mongo.getUsers(req.body, result => {
    res.json(result);
  });
});

router.put("/signUpDrivers", (req, res) => {
  console.log("BODY SERVER", req.body);
  // let newAvaliable=req.body
  // console.log(newAvaliable)
  mongo.editAvaliable(req.body, result => {
    res.json(result);
  });
});

module.exports = router;
