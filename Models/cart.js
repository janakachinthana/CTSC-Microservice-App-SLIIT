const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
    code: { type: String, required: true, trim: true }, 
    userId: { type: String, required: true, trim: true },
    amount: { type: Number, required: true, trim: true }
});


const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;