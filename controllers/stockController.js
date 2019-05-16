const express = require('express');
const router = express.Router();
const Stock = require('../models/stocks');
const fetch = require("node-fetch")



router.get('/home', async(req,res)=>{
    const data = await fetch('https://ws-api.iextrading.com/1.0/tops')
    const parsedData = await data.json()
    let stocks = [];
    for(let i = 0; i < 10; i++){
        stocks.push(parsedData[i])
    }
    res.json({
        success:true,
        data: stocks,
        message:"got all the stocks!"
    })
})






module.exports = router;