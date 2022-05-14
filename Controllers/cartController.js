const Cart = require("../Models/cart")

exports.getAllCartItems = (req, res, next) =>{

    try {
        const carts = Cart.find()

        res.status(200).json({
            status: "success",
            results: carts.length,
            data: carts
        });
    } catch (e) {
        res.status(400).json({
            status: e
        });
    }
}

exports.getCartItemsByUser = (req, res, next) =>{

    try {
        const carts = Cart.findById(req.params.id)

        res.status(200).json({
            status: "success",
            results: carts.length,
            data: carts
        });
    } catch (e) {
        res.status(400).json({
            status: "fail"
        });
    }
}

exports.createCartItem = (req, res, next) =>{

    try {
        const cart = Cart.create(req.body)

        res.status(200).json({
            status: "successs",
            data: cart
        });
    } catch (e) {
        res.status(400).json({
            status: "fail"
        });
    }
}


exports.UpdateCartItem = (req, res, next) =>{

    try {
        const carts = Cart.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })

        res.status(200).json({
            status: "success",
            data: carts
        });
    } catch (e) {
        res.status(400).json({
            status: "fail"
        });
    }
}


exports.DeleteCartItem = (req, res, next) =>{

    try {
        const cart = Cart.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "success"
            // ,
            // data: carts
        });
    } catch (e) {
        res.status(400).json({
            status: "fail"
        });
    }
}