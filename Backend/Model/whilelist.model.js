const mongoose = require('mongoose');
const wishlist = mongoose.Schema({
    title: String,
    img: String,
    price: String,
    range_from: String,
    range_end: String,
    new: String,
    tag: String,
    userId: String
})
const WishlistModel = mongoose.model('wishlist', wishlist);
module.exports = WishlistModel;