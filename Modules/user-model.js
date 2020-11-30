const mongoose = require("mongoose");
const schema = mongoose.Schema
const ObjectId = require('mongoose').Types.ObjectId;
const user = new schema(
    {
    shop_Name:{type:String,required:true},
    brief_description :{type:String,required:true},
    serviceSupplier: { type: String, required: true },
    colorAbove: { type: String, required: true },
    subjectID: { type: String, required: true },
   
},
{timestamps:true},


)
user.virtual('shops', {
    ref: 'shop', 
    localField: '_id', 
    foreignField: 'shop_id', 
  
});

module.exports = mongoose.model("users", user)