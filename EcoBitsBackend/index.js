const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
require('dotenv').config();

app.use(express.json()); 
app.use(cors()); //express will connect to react project on port

// add your mongodb url
mongoose.connect(process.env.MONGO_URI)

//API Creation
app.get("/", (req, res)=>{
    res.send("Express app is running")
})

// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// creating upload endpoint for images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res)=>{
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema for creating products
const Product = mongoose.model("Product", {
    id:{
        type:String,
        required: true,
    },
    name:{
        type:String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true
    },
    new_price:{
        type:Number,
        required: true,
    },
    old_price:{
        type:Number,
        required: true,
    },
    date:{
        type:Date,
        default: Date.now,
    },
    available:{
        type: Boolean,
        default: true
    },
    description:{
        type: String,
        required: true,
    },
})

app.post('/addproduct', async(req, res)=>{
    const product = new Product({
        id:req.body.id,
        name:req.body.name,
        image: req.body.image,
        category: req.body.category,
        description: req.body.description,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success: true,
        name: req.body.name,
    })
})

// creating api for deleting product
app.post('/removeproduct', async (req, res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

//creating api forgetting all products
app.get('/allproducts', async(req, res)=>{
    let products = await Product.find({});
    res.send(products);
})

//schema for for user model
const Users = mongoose.model('Users', {
    name:{
        type:String,
    },
    email:{
        type:String,
        unique: true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type: Date,
        default: Date.now,
    }
})

const Pickups = mongoose.model('Pickups', {
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    mobile:{
        type:Number,
    },
    address:{
        type:String,
    },
    pincode:{
        type:Number,
    },
    pickupDate:{
        type: Date,
    },
    date:{
        type: Date,
        default: Date.now,
    }
})

// Endpoint to store pickup form data
app.post('/schedulePickup', async (req, res) => {
    const { name, email, mobile, address, pincode, pickupDate } = req.body;

    try {
        const newPickup = new Pickups({
            name,
            email,
            mobile,
            address,
            pincode,
            pickupDate,
        });

        await newPickup.save();

        res.status(200).json({
            success: true,
            message: "Pickup request has been scheduled successfully!"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "There was an error scheduling the pickup request."
        });
    }
});

// Endpoint to get all pickup requests for admin
app.get('/getPickups', async (req, res) => {
    try {
        const pickups = await Pickups.find({});
        res.json(pickups);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Error fetching pickup requests",
        });
    }
});

// Endpoint to remove a pickup request
app.post('/removePickup', async (req, res) => {
    const { id } = req.body;
  
    try {
      const result = await Pickups.findByIdAndDelete(id);
      if (result) {
        res.json({ success: true });
      } else {
        res.json({ success: false, message: "Pickup not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Error deleting pickup" });
    }
});
  


//endpoint for registering user
app.post('/signup', async (req, res) => {
    try {
      let check = await Users.findOne({ email: req.body.email });
      if (check) {
        return res.status(400).json({ success: false, errors: "User already exists" });
      }
  
      const allProducts = await Product.find({});
      let cart = {};
  
      allProducts.forEach(product => {
        cart[product.id] = 0;
      });
  
      const user = new Users({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
      });
  
      await user.save();
  
      const data = {
        user: {
          id: user.id
        }
      };
  
      const token = jwt.sign(data, 'secret_ecom');
      res.json({ success: true, token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, errors: "Internal server error" });
    }
  });

// endpoint for userlogin
app.post('/login', async(req,res)=>{
    let user = await Users.findOne({email:req.body.email})
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data={
                user:{
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom')
            res.json({success:true, token})
        }
        else{
            res.json({success:false, errors:"Password Incorrect"})
        }
    }
    else{
        res.json({success:false, errors:"Incorrect Email"})
    }
})

//middleware to fetch user
const fetchuser = async(req,res, next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(400).send({errors:"Authenticate using valid token"})
    }
    else{
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"Authenticate using valid token"})
        }
    }
}

app.post('/addtocart', fetchuser, async (req, res) => {
    try {
      const userData = await Users.findOne({ _id: req.user.id });
  
      const itemId = req.body.itemId;
  
      if (!userData.cartData) {
        userData.cartData = {};
      }

      if (!userData.cartData[itemId]) {
        userData.cartData[itemId] = 0;
      }

      userData.cartData[itemId] += 1;
  
      await Users.findOneAndUpdate(
        { _id: req.user.id },
        { cartData: userData.cartData }
      );
  
      res.send("Added to Cart");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error adding to cart");
    }
});

app.post('/removefromcart', fetchuser, async(req,res)=>{
    let userData = await Users.findOne({_id:req.user.id})
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId]-=1;
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData: userData.cartData})
    res.send("Added to Cart")
})
  
app.post('/getcart', fetchuser, async(req,res)=>{
    let userData = await Users.findOne({_id:req.user.id})
    res.json(userData.cartData)
})

const Collaboration = mongoose.model('Collaboration', {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    message: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
});

app.post('/collaborate', async (req, res) => {
    const { name, email, phone, message } = req.body;
  
    try {
      const newCollab = new Collaboration({ name, email, phone, message });
      await newCollab.save();
  
      res.status(200).json({
        success: true,
        message: "Collaboration request submitted!",
      });
    } catch (error) {
      console.error("Error saving collaboration:", error);
      res.status(500).json({
        success: false,
        message: "Failed to submit collaboration request.",
      });
    }
});
  
  // Endpoint to fetch all collaboration requests (for admin)
app.get('/getCollaborations', async (req, res) => {
    try {
      const collaborations = await Collaboration.find({});
      res.json(collaborations);
    } catch (error) {
      console.error("Error fetching collaborations:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch collaboration requests.",
      });
    }
});
  
  // Endpoint to delete a collaboration request by ID
app.post('/removeCollaboration', async (req, res) => {
    const { id } = req.body;
  
    try {
      const result = await Collaboration.findByIdAndDelete(id);
      if (result) {
        res.json({ success: true });
      } else {
        res.json({ success: false, message: "Collaboration not found" });
      }
    } catch (error) {
      console.error("Error deleting collaboration:", error);
      res.status(500).json({
        success: false,
        message: "Failed to delete collaboration request.",
      });
    }
});
  

app.listen(port, (error)=>{
    if(!error){
        console.log("Server running on port "+port)
    }
    else{
        console.log("Error: "+error)
    }
})