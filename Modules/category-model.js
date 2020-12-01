const mongoose = require("mongoose");
const schema = mongoose.Schema;
const category = new schema(
  {
    category_name: { type: String, required: true },
    submit_time: { type: String },
  
  },
  { timestamps: true }
);



module.exports = mongoose.model("category", category);