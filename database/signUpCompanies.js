const db = require("../database");

//db.model and then the method (find, create, etc..)
const createUser = (user, cb) => {
  db.signUpCompanies.create(user, (err, data) => {
    if (err) cb(err);
    else cb(data);
  });
};

const getUsers = (user, cb) => {
  console.log(user);
  let USER = {
    email: user.email,
    password: user.password
  };
  console.log(USER);
  db.signUpCompanies.find(USER, (err, data) => {
    if (err) cb(err);
    else cb(data);
  });
};
const getCompany=(cb)=>
{
  db.signUpCompanies.find({},( err, data)=>{
    if (err) cb(err);
    else cb(data);
  }
  )}
  const getDriver=(cb)=>
{
  db.signUpDrivers.find({},( err, data)=>{
    if (err) cb(err);
    else cb(data);
  }
  )}

  const getAllUsers = (cb) => {
    db.signUpCompanies.find({}, (err, data) => {
      if (err) cb(err);
      else cb(data);
    });
  };


const editRequst=(newRequst,cb)=>{
  console.log("ID",newRequst.id)
  let x = {
    _id: newRequst.id
  }
  db.signUpCompanies.updateOne({_id:newRequst.id},{$set:{"request" :newRequst.request}},
  (err, data) => {
    if (err) {
      cb(err)
    } else {
     
      getAllUsers(cb)
    }
  }
  )
}




 
   
module.exports = { createUser, getUsers,getCompany,getDriver,editRequst,getAllUsers };
