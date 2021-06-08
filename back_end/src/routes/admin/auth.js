const express = require("express");
const env = require("dotenv");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const {signup, signin} = require('../../controller/admin/auth')
const {sellersignup, sellersignin} = require('../../controller/seller/auth')
const { validateSignupRequest,validateSigninRequest,isRequestValidated } = require("../../validators/auth");

router.post("/admin/signup",validateSignupRequest,isRequestValidated, signup)
router.post("/admin/signin",validateSigninRequest,isRequestValidated, signin)
router.post("/seller/signin",validateSigninRequest,isRequestValidated, sellersignin)
router.post("/seller/signup",validateSignupRequest,isRequestValidated, sellersignup)


module.exports = router;