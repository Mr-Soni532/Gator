const express = require('express');
const productRouter = express.Router();
const controller = require('../Controller/product.controller')

productRouter.get('/fetch/:tag', controller.fetchProduct)
productRouter.get('/fetch_highToLow/:tag', controller.fetch_LTH)
productRouter.get('/fetch_lowToHigh/:tag', controller.fetch_HTL)
productRouter.post('/add', controller.addProduct)
productRouter.post('/addalldata', controller.AddAllProducts)
productRouter.post('/search', controller.searchProduct)
productRouter.delete('/delete', controller.deletProduct)

module.exports = productRouter;