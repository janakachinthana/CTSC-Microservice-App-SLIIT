const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const cartSchema = new mongoose({
    
    userId: {
        type: string,
        require: [true, "userId required"]
    },
    productId: {
        type: string,
        require: [true, "productId required"]
    },
    count:{
        type: int,
        require: [true, "count required"]
    }

})

const Cart = mogoose.model("Post", cartSchema);
module.exports = Cart;