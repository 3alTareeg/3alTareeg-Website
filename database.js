const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/3alTareegWebsite", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection failed");
  console.log("____________________________");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});

// let blablaSchema = new mongoose.Schema({
//   BlaBla: String,
//   BlaBlaBla: Number
// });

let signUpCompaniesSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  order: Boolean,
  request: Boolean,
  price: Number,
  productWeight: Number,
  typeOfService: String,
  nameProduct: String,
  file: String,
  numberOfProducts: Number,
  package: Number
});

let signUpDriversSchema = new mongoose.Schema({
  name: String,
  email: String,
  plateNumber: String,
  work: String,
  password: String,
  isAvailable: Boolean
});

let CompaniesSchema = new mongoose.Schema({
  name: String
});

let DriversSchema = new mongoose.Schema({
  name: String
});

let extraSchema = new mongoose.Schema({
  blabla: String
});

let extra2Schema = new mongoose.Schema({
  blabla: String
});

let signUpCompanies = mongoose.model("signUpCompanies", signUpCompaniesSchema);
let signUpDrivers = mongoose.model("signUpDrivers", signUpDriversSchema);
let companies = mongoose.model("companies", CompaniesSchema);
let drivers = mongoose.model("drivers", DriversSchema);
let extra = mongoose.model("extra", extraSchema);
let extra2 = mongoose.model("extra2", extra2Schema);

module.exports = {
  signUpCompanies,
  signUpDrivers,
  companies,
  drivers,
  extra,
  extra2
};
