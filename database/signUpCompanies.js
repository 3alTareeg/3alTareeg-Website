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

let addOrder = (user, cb) => {
  console.log("DATABASE", user);
  db.signUpCompanies.updateOne(
    { name: user.name },
    {
      $set: {
        order: true,
        typeOfService: user.typeOfService,
        nameProduct: user.nameProduct,
        price: user.price,
        productWeight: user.productWeight,
        numberOfProducts: user.numberOfProducts,
        package: user.package,
        file: user.file
      }
    },
    (err, data) => {
      if (err) {
        console.log(data);
        cb(err);
      } else {
        console.log(data);
        cb(data);
      }
    }
  );
};

module.exports = { createUser, getUsers, addOrder };
