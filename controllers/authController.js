const express = require('express');
const router = express.Router();
const User = require('../models/user')


router.get('/register', async (req, res) => {

    try {

        const user = await User.create(req.body);
        req.session.logged = true;
        req.session.username = req.body;


        res.json({
            status: 200,
            data: req.body,
            success: true
        });

    } catch(err) {
        console.log(err);
        res.send(err);
    }
})


router.post('/', async (req, res) => {
    console.log(req.body, ' this is session')

    try {

        const user = await User.findOne(req.body);
        req.session.logged = true;
        req.session.username = req.body.username;


        res.json({
            status: 200,
            data: req.body.username,
            success: true
        });



    } catch(err) {
        console.log(err);
        res.send(err);
    }
});


router.get('/:id', async (req, res, next) => {

    try {
        const foundUser = await Stock.findById(req.params.id);

        res.json({
            status: 200,
            data: foundUser
        })

    } catch(err) {
        console.log(err);
        res.send(err);
    }
});

router.put('/:id', async (req, res) => {

    try {
        const updatedUser = await Stock.findByIdAndUpdate(req.params.id, req.body, {new: true});

        res.json({
            status: 200, 
            data: updatedUser
        });

    } catch(err) {
        console.log(err);
        res.send(err);
    }
});


router.delete('/:id', async (req, res) => {

    try {
        const deletedUser = await Stock.findByIdAndRemove(req.params.id);

        res.json({
            status: 200,
            data: deletedUser
        })

    } catch(err) {
        console.log(err);
        res.send(err);
    }
})



module.exports = router;