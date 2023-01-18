const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    range_from: {
        type: String,
        require: true
    },
    range_end: {
        type: String,
        require: true
    },
    new: {
        type: Boolean,
        default: true
    },
    userId: {
        type: String,
    }
})
const ProductModel = mongoose.Model('product', productSchema);
module.exports = ProductModel;