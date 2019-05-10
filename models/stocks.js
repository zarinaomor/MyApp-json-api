const mongoose = require('mongoose');


const stockSchema = new mongoose.Schema({
    title: String,
    description: String
});


module.exports = mongoose.model('Stock', stockSchema);