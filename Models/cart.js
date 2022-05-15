const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
   
    userId: { type: String, required: true, trim: true },
    productId: { type: String, required: true, trim: true }
    
});


const Cart = mongoose.model("carts", cartSchema);
module.exports = Cart;