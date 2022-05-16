const express = require("express");

const cartController = require("../Controllers/cartController");

const router = express.Router();

router.post('/', cartController.createCartItem);

router.get('/', cartController.getAllCartItems);

router.put('/:id', cartController.editCartItem);

router.delete('/:id', cartController.deleteCartItem);

router.post('/userproduct/', cartController.getCartItemByUserId);

router.get('/userproducts/:id', cartController.getCartItemsByUserId);



module.exports = router;



