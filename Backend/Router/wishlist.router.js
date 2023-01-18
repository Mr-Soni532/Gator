const express = require('express');
const wishlistRouter = express.Router();
const controller = require('../Controller/wishlist.controller')

wishlistRouter.get('/fetch', controller.fetchProduct)
wishlistRouter.post('/add', controller.addProduct)
wishlistRouter.delete('/delete', controller.deletProduct)

module.exports = wishlistRouter;