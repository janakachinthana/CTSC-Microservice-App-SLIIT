const express = require("express");

const cartController = require("../Controllers/cartController");

const router = express.Router();

router.post('/', cartController.createCartItem);

router.get('/', cartController.getAllCartItems);

router.post('/:id', cartController.editCartItem);

router.delete('/:id', cartController.deleteCartItem);

module.exports = router;



