const express = require('express');
const cartRouter = express.Router();
const controller = require('../Controller/wishlist.controller')

cartRouter.get('/fetch', controller.fetchProduct)
cartRouter.post('/add', controller.addProduct)
cartRouter.delete('/delete', controller.deletProduct)

module.exports = cartRouter;