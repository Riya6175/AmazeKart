const express = require("express");
const { requireSignin, adminMiddleware,sellerMiddleware } = require("../../common-middleware");
const {
  updateOrder,
  getCustomerOrders,
} = require("../../controller/seller/order.seller");
const router = express.Router();

router.post(`/order/update`, requireSignin,sellerMiddleware, updateOrder);
router.post(
  `/order/getCustomerOrders`,
  requireSignin,
  sellerMiddleware,
  getCustomerOrders
);

module.exports = router;