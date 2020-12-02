const express = require('express');

const Product = require('../models/products');

const router = express.Router();

router.post('/product', async (req, res) => {
    const { title, price } = req.body;
    
    try {
        if (await Product.findOne({ title }))
            return res.status(400).send({ error: 'Product already exists' });

        const product = await Product.create(req.body);
        
        return res.send({ 
            product
            
         });
    } catch (err) {
        return res.status(400).send({ error: 'Product creation failed' });
    }
});


router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        return res.send({
            products
        });
    } catch (err) {
        return res.status(400).send({ error: 'Product listing failed' });
    }
})


module.exports = app => app.use('/', router);