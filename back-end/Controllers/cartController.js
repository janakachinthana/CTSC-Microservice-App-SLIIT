const Cart = require("../Models/cart")


const createCartItem = async (req, res, next) =>{

    if (req.body) {

        const data = getAllCartItems();

        console.log(data);
        const product = new Cart(req.body);
        product.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


const getAllCartItems = async (req, res, next) =>{

    await Cart.find({})
    .then(data => {
        res.status(200).send({ data: data });
    })
    .catch(error => {
        res.status(500).send({ error: "error.message" });
    });
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



//export to use in another class
module.exports = {
    createCartItem,
    getAllCartItems,
}