const express = require('express');
const router = express.Router();
const Stock = require('../models/stocks');


router.get('/', async (req, res) => {
    console.log(req.body, ' this is get all')

    try {
        const allStocks = await Stock.find();

        res.json({
            status: 200,
            data: allStocks
        })

    } catch(err) {
        console.log(err);
        res.send(err);
    }
});


router.post('/', async (req, res) => {

    try {
        console.log(req.body, ' this is req.body');
        const createdStock = await Stock.create(req.body);
        console.log('response happening?');

        res.json({
            status: 200,
            data: createdStock
        });

    } catch(err) {
        console.log(err);
        res.send(err);
    }
});


router.get('/:id', async (req, res, next) => {

    try {
        const foundStock = await Stock.findById(req.params.id);

        res.json({
            status: 200,
            data: foundStock
        })

    } catch(err) {
        console.log(err);
        res.send(err);
    }
});

router.put('/:id', async (req, res) => {

    try {
        const updatedStock = await Stock.findByIdAndUpdate(req.params.id, req.body, {new: true});

        res.json({
            status: 200, 
            data: updatedStock
        });

    } catch(err) {
        console.log(err);
        res.send(err);
    }
});


router.delete('/:id', async (req, res) => {

    try {
        const deletedStock = await Stock.findByIdAndRemove(req.params.id);

        res.json({
            status: 200,
            data: deletedStock
        })

    } catch(err) {
        console.log(err);
        res.send(err);
    }
})

module.exports = router;