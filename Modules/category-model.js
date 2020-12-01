const mongoose = require("mongoose");
const schema = mongoose.Schema;
const category = new schema(
  {
    category_name: { type: String, required: true },
    submit_time: { type: String },
  
  },
  { timestamps: true }
);
category.virtual("products", {
  ref: "product",
  localField: "_id",
  foreignField: "product_id",
  justOne: false,
})




module.exports = mongoose.model("category", category);