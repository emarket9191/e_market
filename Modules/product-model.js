const mongoose = require("mongoose");
const schema = mongoose.Schema;
// const ObjectId = require("mongoose").Types.ObjectId;
const product = new schema(
  {
    product_Name: { type: String, required: true },
    serial_number: { type: String, required: true },
    category: { type: String, required: true },
    package_dimension: { type: String, required: true },
    package_weight: { type: String, required: true },
    price_per_unit: { type: String, required: true },
    unit_in_package: { type: Number, required: true },
    quantity_in_stuck: { type: Number, required: true },
    product_description:{ type: String, required: true },
    shipment: { type: String, required: true },
    service: { type: String, required: true },
    fob: { type: String, required: true },
    submit_time: { type: String, required: true },
    pause_time: { type: String, required: true },
  },
  

  { timestamps: true }
);



module.exports = mongoose.model("products", product);
