const mongoose = require('mongoose');

const loteSchema = new mongoose.Schema({
    pan: Number,
    tilt: Number,
    title: String,
    id: String,
    description: String,
    skinid: String,
    target: String,
    url: String
});

module.exports = mongoose.model('Lote', loteSchema);
