const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    
    img:{type:String},
    name:{type:String} ,
    plus:{type:String},
    description: {type:String},
    offerPrice:  {type:Number},
    plus_icon_src:{type:String},
    count: {type:String},
    actualPrice: {type:Number},
    cetegory:{type:String}
     
    })
     const Product=mongoose.model("product",productSchema)
     module.exports=Product