const express = require("express");
const env = require("dotenv");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const {signup, signin} = require('../../controller/seller/auth')
const { validateSignupRequest,validateSigninRequest,isRequestValidated } = require("../../validators/auth");


router.post("/seller/signin",validateSigninRequest,isRequestValidated, signin)
router.post("/seller/signup",validateSignupRequest,isRequestValidated, signup)


module.exports = router;