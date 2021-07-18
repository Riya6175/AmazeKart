
const express = require("express");
const { requireSignin, adminMiddleware,sellerMiddleware } = require("../../common-middleware");
const {
  updateOrder,
  getCustomerOrders,
} = require("../../controller/seller/order.seller");
const router = express.Router();

router.post(`/order/update`, requireSignin,  updateOrder);
router.post(
  `/order/getCustomerOrders`,
  requireSignin,
  getCustomerOrders
);

module.exports = router;