const express = require('express');
const Category = require("../models/category");
const slugify = require("slugify");
const { addItemToCart } = require('../controller/cart');
const { requireSignin, userMiddleware } = require("../common-middleware")
const router = express.Router();


router.post("/user/cart/addtocart",requireSignin,userMiddleware, addItemToCart);
//router.get("/category/getcategory",getCategories);

module.exports = router;