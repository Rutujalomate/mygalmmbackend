const express=require("express")
const Product=require("./product.model");
console.log(Product);
const app=express.Router()


app.get("/", async(req,res)=>{
  try{
    let data=await Product.find()
    res.send(data)
}catch(err){
console.log("err")
}
})
app.post("/",async(req,res)=>{
  const {img,name,description,offerPrice,count,actualPrice,category}=req.body;
  try{
      let data=await Product.insertMany([{img,name,description,offerPrice,count,actualPrice,category,total:1}]);
  res.send(data)
  }catch(err){
      console.log(err.message)
  }
  
})









module.exports=app