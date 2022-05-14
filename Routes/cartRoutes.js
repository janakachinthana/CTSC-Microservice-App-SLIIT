const express = require("express");

const cartController = require("../Controllers/cartController");

const router = express.Router();

router.route("/").get(cartController.getAllCartItems).post(cartController.createCartItem);


module.exports = router;