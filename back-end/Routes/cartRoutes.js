const express = require("express");

const cartController = require("../Controllers/cartController");

const router = express.Router();

router.post('/', cartController.createCartItem);

router.get('/', cartController.getAllCartItems);

module.exports = router;



