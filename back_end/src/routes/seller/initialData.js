const express = require("express");
const { initialData } = require("../../controller/seller/initialData");
const router = express.Router();



router.post("/initialdata/products", initialData)


module.exports = router;