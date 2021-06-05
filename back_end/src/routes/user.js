const express = require("express");
const env = require("dotenv");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const {signup} = require('../controller/user')


router.post("/signup",signup)

router.post("/signin",(req,res) => {
    
});

module.exports = router;