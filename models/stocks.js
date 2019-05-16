const mongoose = require('mongoose');


const stockSchema = new mongoose.Schema({
   stockName: String
});


module.exports = mongoose.model('Stock', stockSchema);