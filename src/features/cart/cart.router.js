const express=require("express")
const Cart=require("./cart.model");

const app=express.Router()
//const User=require("../user/user.model");
//const Product=require("../product/product.model");



// const authMiddleware=async(req,res,next)=>{
//   const token=req.headers.token
//   //const{email,password}=req.body
//     ///console.log("email",email,password)
//     if(!token){
//       res.send("missung token")
//     }
//     let[email,password]=token.split("_#_")

//     try{
//     let user=await User.findOne({email})
//     console.log("user",user)
//     if(user){
//         if(password===user.password){
//             console.log("in")
//             req.userId=user.id;
//             next()

//             //res.send({token:`${email}_#_${password}`,user})
//         }
//         else{
//             res.status(404).send(` Athentication failed incorrect password`)
//         }
//     }else{
//         res.status(404).send(`user with email ${email} not found`)

//     }
// }catch(e){
//     res.send(e.message)
// }

// }
// app.use(authMiddleware)



//app.post("")
app.get("/",async(req,res)=>{
  //const token=req.headers.token

  //console.log("token",token)
    try{
    let carts=await Cart.find()
    ///.populate(["user","product"]);
    
  res.send(carts)
       
    
}catch(e){
    res.send(e.message)
}
})


app.get("/:id", async(req,res)=>{
  let id=req.params.id
 // let num=Number(id)
  //console.log(req.method,req.url)
  //let product=db.products.find((products)=> products.id===num)
  let user=await Cart.findById({"_id":id})
  try{
      if(user){
          res.send(user)
      }else{
          res.send("user not found")
      }
  }catch(e){
      res.send(e.message)
  }

  })







app.post("/",async(req,res)=>{
  //let product=await Product.findById(req.body.product)
  //console.log("product",product)

//     try{
//       let product=await Product.findById(req.body.product)
//       if(product.quantity>req.body.quantity){
//         let cart=await Cart.create({...req.body,user:req.userId})
//         res.send(cart)
// await Product.findByIdAndUpdate(product.id,{quantity:product.quantity-cart.quantity})
//       }else{
//         res.send(`only ${product.quantity} item available`)
//       }


      const {img,name,description,offerPrice,count,actualPrice,}=req.body;
      try{
          let cart=await Cart.insertMany([{img,name,description,offerPrice,count,actualPrice,total:1}]);
      res.send(cart)
      }catch(err){
          console.log("err")
      }


      
    
       
    

})


app.delete("/:id", async(req,res)=>{
  let id=req.params.id
  // let num=Number(id)
 // console.log("id",_id)

   console.log("req",req.userId)
   
   ///let user= await Users.findByIdAndDelete(id)

   let user=await Cart.findByIdAndDelete({"_id":id});
   
   console.log("puio",user)

  // console.log("cart",user.product.id)
 try{
    if(user){
      res.send("user deleted" )
  }else{
      res.send("user not found")
  }
   }catch(e){
       res.send(e.message)
   }
   })



   app.patch("/:id", async(req,res)=>{
    let id=req.params.id
   // let num=Number(id)
    //console.log(req.method,req.url)
    //let product=db.products.find((products)=> products.id===num)
    try{
        let user=await Cart.findByIdAndUpdate({"_id":id},{...req.body},{new:true})
        console.log(user)

        if(user){
            res.send(user)
        }else{
            res.send("user not found")
        }
    }catch(e){
        res.send(e.message)
    }

    })



module.exports=app