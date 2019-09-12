const db = require("../database");

//db.model and then the method (find, create, etc..)
const createUser = (user, cb) => {
  db.signUpDrivers.create({ ...user, isAvailable: true }, (err, data) => {
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
  db.signUpDrivers.find(USER, (err, data) => {
    if (err) cb(err);
    else cb(data);
  });
};

const getAllUsers = cb => {
  db.signUpDrivers.find({}, (err, data) => {
    if (err) cb(err);
    else cb(data);
  });
};

const editAvaliable = cb => {
  // console.log(newAvaliable)
  db.signUpDrivers.updateOne(
    { isAvailable: true },
    { $set: { isAvailable: false } },
    (err, data) => {
      if (err) {
        cb(err);
      } else {
        getAllUsers(cb);
      }
    }
  );
};

module.exports = { createUser, getUsers, editAvaliable, getAllUsers };
