const mongoose = require("mongoose");
const schema = mongoose.Schema
const ObjectId = require('mongoose').Types.ObjectId;
const user = new schema(
    {
    first_Name:{type:String,required:true},
    last_Name :{type:String,required:true},
    user_Name : {type:String,required:true},
    gender : {type:String},
    birthday : {type:Date},
    profileImage : { type: String,required: true},
    business_name :{type:String,required:true},
    password :{type:String,required:true},
    email:{type:String,required:true}


},
{timestamps:true},


)
user.virtual('shops', {
    ref: 'shop', 
    localField: '_id', 
    foreignField: 'shop_id', 
  
});

module.exports = mongoose.model("users", user)