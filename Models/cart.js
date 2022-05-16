const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
    
    userId: { type: Number, required: true, trim: true },
    productId: { type: Number, required: true, trim: true },
    amount: { type: Number, required: true, trim: true }
});


const Cart = mongoose.model("carts", cartSchema);
module.exports = Cart;