const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title: {
        type: String,
    },
    img: {
        type: String,
    },
    price: {
        type: String,
    },
    range_start: {
        type: String,
    },
    range_end: {
        type: String,
    },
    new: {
       type: String
    },
    tag: String
})
const ProductModel = mongoose.model('product', productSchema);
module.exports = ProductModel;