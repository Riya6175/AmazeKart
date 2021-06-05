const express = require("express");
const env = require("dotenv");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const {signup, signin, requireSignin} = require('../controller/auth')


router.post("/signup",signup)
router.post("/signin", signin)

router.post("/profile",requireSignin, (req,res) =>{
    res.status(200).json({user: "profile"})
});

module.exports = router;