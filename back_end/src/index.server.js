const express = require("express");
const env = require("dotenv");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");

//routes
const userRoutes = require('./routes/user')

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
app.use('/api',userRoutes)


app.listen(process.env.PORT, ()=>{
    console.log(`server running on port ${process.env.PORT}`);
})