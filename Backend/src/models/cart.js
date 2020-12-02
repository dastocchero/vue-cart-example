const mongoose = require('../database');

const cartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;