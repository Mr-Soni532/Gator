const express = require('express');
const connectToMongo = require('./Config/db');
const cors = require('cors');
const userRouter = require('./Router/user.router');
const productRouter = require('./Router/product.router');
const cartRouter = require('./Router/cartpage.router');
const wishlistRouter = require('./Router/wishlist.router');
const app = express()
require('dotenv').config()
const PORT = process.env.PORT;

app.use(express.json())
app.use(cors())

app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/wishlist', wishlistRouter)

app.get('/', (req,res)=>{
    res.send('Welcome, server is working fine.')
})

app.listen(PORT, async (err)=>{
    try {
        await connectToMongo();
        console.log(`Gator backend @ port ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})