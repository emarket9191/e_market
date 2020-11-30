const mongoose = require("mongoose");
const schema = mongoose.Schema
const ObjectId = require('mongoose').Types.ObjectId;
const shop = new schema(
    {
    shop_name:{type:String,required:true},
    shop_fax:{type:String},
    shop_country:{type:String,required:true},
    shop_city:{type:String,required:true},
    shop_zipCode:{type:String},
    brief_description :{type:String,required:true},
    serviceSupplier: { type: String },
    colorAbove: { type: String },
    colorBottom: { type: String},
    dateEstablishmentOfBusiness:{type: Date}
    

},
{timestamps:true},
)
shop.virtual('productID', {
    ref : 'product',
    localField: '_id', 
    foreignField: 'product_id', 

});


module.exports = mongoose.model("shop", shop)