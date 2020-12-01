const mongoose = require("mongoose");
const validator = require("validator");
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
  /*   email: {
        type: String,
        required: true} */
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
          if (!validator.isEmail(value)) {
            throw new Error({ error: "Invalid Email address" });
          }
        },
      },
      

},
{timestamps:true},


)
user.virtual('shops', {
    ref: 'shop', 
    localField: '_id', 
    foreignField: 'shop_id', 
  
});

module.exports = mongoose.model("users", user)