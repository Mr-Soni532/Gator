const express = require('express');
const cartRouter = express.Router();
const controller = require('../Controller/cartpage.controller');
const authorization = require('../middleware/authorization.middleware');

cartRouter.get('/fetch', authorization,controller.fetchProduct)
cartRouter.get('/fetchbyid/:id', authorization,controller.fetchProduct_byId)

cartRouter.post('/add',  authorization,controller.addProduct)

cartRouter.delete('/delete',  authorization,controller.deletProduct)

module.exports = cartRouter;