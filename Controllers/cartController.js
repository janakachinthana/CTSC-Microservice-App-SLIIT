const Cart = require("../Models/cart")


const createCartItem = async (req, res, next) => {

    if (req.body) {

        const cart = new Cart(req.body);
        cart.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


const getAllCartItems = async (req, res, next) => {
    console.log("test");
    await Cart.find({}).populate('carts')
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });

}


const getCartItemsByUserId = async (req, res, next) => {

    await Cart.find({ userId: req.params.id }).populate('carts')
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const getCartItemByUserId = async (req, res, next) => {
    var arr = new Array();
    if (req.body) {
        await Cart.find({ userId: req.body.userId }).populate('carts')
        .then(data => {
            data.forEach(element => {
                if(element.productId == req.body.productId){
                    arr.push(element)
                }
            });
           
            res.status(200).send({ data: arr });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
    }
    
}

const editCartItem = async (req, res, next) => {
    if (req.params && req.params.id && req.body) {
        const cart = new Cart(req.body);
        await Cart.updateOne({ _id: req.params.id }, { $set: { amount: req.body.amount } })
            .then(response => {
                res.status(200).send({ data: response })
            }).catch(error => {
                res.status(500).send({ error: error.messege })
            })
    }
}


const deleteCartItem = async (req, res, next) => {

    if (req.params && req.params.id) {
        await Cart.deleteOne({ _id: req.params.id })
            .then(response => {
                console.log("delete Item" + response);
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
    deleteCartItem,
    getCartItemsByUserId,
    getCartItemByUserId
}