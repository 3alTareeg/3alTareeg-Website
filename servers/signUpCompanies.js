const express = require("express");
var router = express.Router();
const mongo = require("../database/signUpCompanies");

//To Reach this file, the link should be http://localhost:9000/signUpCompanies

router.get("/", (req, res) => {
  res.send("signIn Router Working Fine");
});

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

// router.get("/blabla", (req, res) => {
//   mongo.blablaFunction(result => {
//     res.json(result);
//   });
// });
 router.get('/signUpCompanies',(req,res)=>{
   mongo.getCompany(result=>
    res.json(result) )
 })
 router.get('/signUpDrivers',(req,res)=>{
   console.log("Data for drivers")
  mongo.getDriver(result=>
   res.json(result) )
})

 router.put('/updateData',(req,res)=>{
   console.log(req.body)
 let newRequst=req.body
 console.log(newRequst)
   mongo.editRequst(newRequst ,(result)=>{
     res.json(result)
   })
 })


module.exports = router;
