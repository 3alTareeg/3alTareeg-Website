const db = require("../database");

//db.model and then the method (find, create, etc..)
const createUser = (user, cb) => {
  User = {
    ...user,
    order: false,
    request: false,
    price: 0,
    productWeight: 0,
    typeOfService: "none",
    nameProduct: "none",
    file: "none",
    numberOfProducts: 0,
    package: 0
  };
  db.signUpCompanies.create(User, (err, data) => {
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

module.exports = { createUser, getUsers };
