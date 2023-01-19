const express = require('express');
const productRouter = express.Router();
const controller = require('../Controller/product.controller')

productRouter.get('/fetch', controller.fetchProduct)
productRouter.post('/add', controller.addProduct)
productRouter.post('/addalldata', controller.AddAllProducts)
productRouter.post('/search', controller.searchProduct)
productRouter.delete('/delete', controller.deletProduct)

module.exports = productRouter;