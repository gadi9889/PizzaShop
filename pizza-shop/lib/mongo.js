const mongoose = require("mongoose");
let Customer = require("../models/Customer");

const { MONGODB_URI } = process.env;

async function connect() {
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
}

module.exports.addCustomer = async function (data) {
  await connect();
  const newCustomer = new Customer({
    tel: data.tel,
    order: data.order,
  });
  await newCustomer.save();
};

module.exports.orderDetails = async function (tel) {
  await connect();
  return Customer.findOne({ tel: tel })
    .then((customer) => {
      return customer;
    })
    .catch((err) => {
      return err;
    });
};

module.exports.findCustomer = async function () {
  await connect();
  return Customer.find();
};

module.exports.deleteCustomer = async function (tel) {
  await connect();
  await Customer.findOneAndDelete({ tel: tel });
  return Customer.find();
};
