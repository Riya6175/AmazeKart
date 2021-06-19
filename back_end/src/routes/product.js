const express = require('express');
const Category = require("../models/category");
const slugify = require("slugify");
const multer = require("multer");
const path = require('path')
// const { addCategory,getCategories } = require('../controller/category');
const { requireSignin, sellerMiddleware, adminMiddleware } = require("../common-middleware");
const { createProduct } = require('../controller/product');

const router = express.Router();
const shortid = require("shortid");

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join( path.dirname(__dirname),'uploads'))
    },
    filename: function(req,file,cb){
        cb(null,shortid.generate() + '-' + file.originalname)
    }
})

const upload = multer({storage})


router.post("/product/addproduct",requireSignin, sellerMiddleware,upload.array("productPicture"), createProduct)

//router.get("/category/getcategory",getCategories);

module.exports = router;