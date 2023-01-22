const express = require('express');
const wishlistRouter = express.Router();
const controller = require('../Controller/wishlist.controller');
const authorization = require('../middleware/authorization.middleware');

wishlistRouter.get('/fetch', authorization, controller.fetchProduct)
wishlistRouter.get('/fetchbyid/:id', authorization, controller.fetchProduct_byId)
wishlistRouter.post('/add', authorization, controller.addProduct)
wishlistRouter.delete('/delete/:id', authorization, controller.deletProduct)

module.exports = wishlistRouter;