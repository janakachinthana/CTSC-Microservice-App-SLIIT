const Cart = require("../Models/cart")


const createCartItem = async (req, res, next) =>{

    if (req.body) {

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
    console.log("test");
        await Cart.find({}).populate('carts')
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });

}

const editCartItem = async (req, res, next) => {
    if (req.params && req.params.id && req.body) {
        const cart = new Cart(req.body);
        console.log(cart);
        await Cart.updateOne({ _id: req.params.id },{cart})
            .then(response => {
                res.status(200).send({ data: response })
            }).catch(error => {
                res.status(500).send({ error: error.messege })
            })
    }
}


const deleteCartItem = async (req, res, next) => {
    console.log("test");
    if (req.params && req.params.id) {
        await Cart.deleteOne({ _id: req.params.id })
            .then(response => {
                res.status(200).send({ data: response })
            }).catch(error => {
                res.status(500).send({ error: error.messege })
            })
    }
}

//export to use in another class
module.exports = {
    createCartItem,
    getAllCartItems,
    editCartItem,
    deleteCartItem
}