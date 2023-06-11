const express = require("express");
const cors = require("cors");
const mongoose= require("mongoose");
const dotenv = require("dotenv").config();
const bcrypt=require("bcryptjs")
const Stripe = require('stripe')

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb+srv://aswathipj:mongodb%40pro@cluster0.3pwieru.mongodb.net/localia?retryWrites=true&w=majority")
  .then(() => console.log("Connect to Database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

//
const userModel = mongoose.model("user", userSchema);


const productSchema = mongoose.Schema({
  shopname:"String",
  productid: {
      type:"String",
      unique:true
  },
    productname: "String",
    category: "String",
    brand: "String",
    otherdetails: "String",
    stock: "String",
    price: "String",
    image:"String"
})

const productsModel = mongoose.model("products",productSchema)

const shopkeeperSchema = mongoose.Schema({
  shoplicencenumber: {
      type:"String",
      unique:true
  },
    shopname: "String",
    city: "String",
    landmark: "String",
    pincode: "String",
    workinghours: "String",
    phonenumber: {
      type:"String",
      unique:true
    },
    password: "String"
})

const shopkeeperModel = mongoose.model("shopkeepers",shopkeeperSchema)
//api
app.get("/", (req, res) => {
  res.send("Server is running");
});

//sign up
app.post("/signup", async (req, res) => {
  
  const { email } = req.body;
  const data =await userModel.findOne({email : email})
  console.log("data"+data)
  if (data) {
    res.send({ message: "Email id is already register", alert: false });
  } else {
    const data = userModel(req.body);
    const save = data.save();
    res.send({ message: "Successfully sign up", alert: true });
  }

});

//api login
app.post("/login",async (req, res) => {
  // console.log(req.body);
  const { email } = req.body;
  const data = await userModel.findOne({ email: email })
    if (data) {
      const dataSend = {
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        image: data.image,
      };
      console.log(dataSend);
      res.send({
        message: "Login is successfully",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  
});

app.post("/shopkeepersignup",async (req,res)=>{
  const {shoplicencenumber,shopname,city,landmark,pincode,workinghours,phonenumber,password} = req.body

  const resultdata = await shopkeeperModel.findOne({phonenumber})
  if(!resultdata){
   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password,salt)
   const user = await shopkeeperModel.create({
      shoplicencenumber,
      shopname,
      city,
      landmark,
      pincode,
      workinghours,
      phonenumber,
      password:hashedPassword
   })
   if(user){
      const dataSend = {
          _id:user._id,
          shoplicencenumber:user.shoplicencenumber,
          shopname:user.shopname,
          city:user.city,
          landmark:user.landmark,
          pincode:user.pincode,
          phonenumber:user.phonenumber
       }
      res.send({message:"Successfully sign up",alert: true,data:dataSend})
   }
   else{
      res.send({message:"Invalid details",alert:false})
   }
  }
  else{
      res.send({message: "Phone number is already registered",alert: false})
  }
  
})

app.post("/shopkeeperlogin",async (req,res)=>{
  const {phonenumber,password} = req.body

  const resultdata = await shopkeeperModel.findOne({phonenumber})
  console.log(resultdata)
  if(resultdata && await bcrypt.compare(password,resultdata.password)){
   //condition if email is not available in database
   const dataSend = {
      _id:resultdata._id,
      shoplicencenumber:resultdata.shoplicencenumber,
      shopname:resultdata.shopname,
      city:resultdata.city,
      landmark:resultdata.landmark,
      pincode:resultdata.pincode,
      phonenumber:resultdata.phonenumber
   }
   console.log(dataSend);
    res.send({
      message: "Login is successfull",
      alert: true,
      data: dataSend,
    });
  }
  else{
      res.send({message: "Invalid credentials",alert: false})
  }
})

app.post("/addproduct",async (req,res)=>{
  const {productid} = req.body

  const resultdata = await productsModel.findOne({productid: productid})
  console.log(resultdata)
  if(!resultdata){
   //condition if email is not available in database
   const data = productsModel(req.body)
   const save = data.save()
   res.send({message:"Product added Successfully",alert: true})
  }
  else{
      res.send({message: "Product is already added",alert: false})
  }
  
})


app.post("/productdisplay",async(req,res)=>{
  const {shopname } = req.body
  const resultdata = await productsModel.find({shopname: shopname})
  if (resultdata) {
      console.log(resultdata)
      res.send({alert:true,data:resultdata})
  }
  else{
      res.send({message:"No products available"})
  }
})

app.get('/update/:id',async(req,res)=>{
  let result = await productsModel.findOne({_id:req.params.id})
  if(result){
      res.send(result)
  }
  else{
      res.send({"result":"No records found"})
  }
})

app.put('/update/:id',async(req,res)=>{
  let result = await productsModel.updateOne(
      {_id:req.params.id},
      {$set:req.body}
      
  )
  console.log(result)
  res.send(result)
})


// //product section

// const schemaProduct = mongoose.Schema({
//   name: String,
//   category:String,
//   image: String,
//   price: String,
//   description: String,
// });
// const productModel = mongoose.model("product",schemaProduct)



// //save product in data 
// //api
// app.post("/uploadProduct",async(req,res)=>{
//     // console.log(req.body)
//     const data = await productModel(req.body)
//     const datasave = await data.save()
//     res.send({message : "Upload successfully"})
// })

//
app.get("/product",async(req,res)=>{
  const data = await productsModel.find({})
  res.send(JSON.stringify(data))
  
})


const orderSchema = mongoose.Schema({
  
    userId:{
      type: [mongoose.Schema.Types.ObjectId],
      require: true,
  },
    name: "String",
    category: "String",
    qty: "String",
    total: "String",
    image:"String"
})

const orderModel = mongoose.model("orders",orderSchema)

app.post("/orders", async (req, res) => {
  console.log(req.body)
    const data = orderModel(req.body);
    const save = data.save();
  
    
res.send({message:"success"})

});



app.get('/orders/:id',async(req,res)=>{
  let result = await orderModel.find({userId:req.params.id})
  console.log("result is "+result)
  if(result){
      res.send({result})
  }
  else{
      res.send({"result":"No orders found"})
  }
})
//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));
