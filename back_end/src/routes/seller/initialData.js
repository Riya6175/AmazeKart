const express = require("express");
const { initialData } = require("../../controller/seller/initialData");
const router = express.Router();
const { requireSignin, adminMiddleware,sellerMiddleware } = require("../../common-middleware");



router.post("/initialdata/products",requireSignin,sellerMiddleware, initialData)


module.exports = router;