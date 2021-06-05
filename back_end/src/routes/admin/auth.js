const express = require("express");
const env = require("dotenv");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
const {signup, signin, requireSignin} = require('../../controller/admin/auth')


router.post("/admin/signup",signup)
router.post("/admin/signin", signin)


module.exports = router;