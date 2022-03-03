const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  tel: {
    type: String,
  },
  order: {
    type: String,
  },
});

const Customer = mongoose.model("Customers", customerSchema);

module.exports = Customer;
