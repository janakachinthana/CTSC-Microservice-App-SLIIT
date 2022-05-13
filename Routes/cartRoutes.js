const express = require("express");

const cartController = require("../Controllers/cartController");

const router = express.router();

router.route("/").get(cartController.getAllCartItems).post(cartController.createCartItem);

router.route("/:id")
.get(cartController.getCartItemsByUser)
.patch(cartController.UpdateCartItem)
.delete(cartController.DeleteCartItem);


module.exports = router;