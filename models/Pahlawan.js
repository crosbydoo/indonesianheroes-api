const mongoose = require('mongoose');

const pahlawanSchema = new mongoose.Schema({
    nama: { type: String,required: true }, 
    nama2: { required: true, type: String },
    kategori: { required: true, type: String },
    asal: { required: true, type: String },
    lahir: { required: true, type: String },
    usia: { required: true, type: String },
    gugur: { required: true, type: String },
    lokasimakam: { required: true, type: String },
    history: { required: true, type: String },
    img: { required: true, type: String },
})

module.exports = mongoose.model('Pahlawan', pahlawanSchema)