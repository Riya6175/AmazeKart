const express = require("express");
const env = require("dotenv");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const path= require("path")

//routes
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')
const sellerRoutes = require('./routes/seller/auth')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')
//environment variobles 
env.config();


//mongodb connection
//mongodb+srv://root:<password>@cluster0.vwceq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.vwceq.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(()=>{
    console.log("database connected");
})
app.use(bodyParser());
app.use(express.json())

app.use(express.static(path.join(__dirname,'uploads')))
app.use('/api',authRoutes)
app.use('/api',adminRoutes)
app.use('/api',sellerRoutes)
app.use("/api",categoryRoutes)
app.use("/api",productRoutes)
app.use("/api",cartRoutes)


app.listen(process.env.PORT, ()=>{
    console.log(`server running on port ${process.env.PORT}`);
})