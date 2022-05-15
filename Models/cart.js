const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
   
    userId: { type: String, required: true, trim: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'Products' 
    }]
    
});


const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;