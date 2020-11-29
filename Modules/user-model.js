const mongoose = require("mongoose");
const schema = mongoose.Schema
const ObjectId = require('mongoose').Types.ObjectId;
const user = new schema(
    {
    first_Name:{type:String,required:true},
    last_Name :{type:String,required:true}
},
{timestamps:true},


)

module.exports = mongoose.model("users", user)