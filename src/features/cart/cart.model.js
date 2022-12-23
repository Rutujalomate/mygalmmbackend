const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    
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
     const Cart=mongoose.model("cart",cartSchema)
     module.exports=Cart