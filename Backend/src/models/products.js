const mongoose = require('../database');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;