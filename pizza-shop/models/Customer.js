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

module.exports =
  mongoose.models.Customers || mongoose.model("Customers", customerSchema);
