const express = require('express');

const Cart = require('../models/cart');

const router = express.Router();

router.get('/cart', async (req, res) => {
    try {
        const cart = await Cart.find({});
        return res.send({
            cart
        });
    } catch (err) {
        return res.status(400).send({ error: 'Cart product listing failed' });
    }
})


module.exports = app => app.use('/', router);