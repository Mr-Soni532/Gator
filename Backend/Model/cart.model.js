const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    title: String,
    img: String,
    price: String,
    range_from: String,
    range_end: String,
    new: String,
    tag: String,
    userId: String

})
const CartModel = mongoose.model('cart', cartSchema);
module.exports = CartModel;