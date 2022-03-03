const mongoose = require("mongoose");
let Customer = require("./customer");

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

export async function addCustomer(data) {
  await connect();
  const newCustomer = new Customer({
    tel: data.tel,
    order: data.order,
  });
  await newCustomer.save();
}
