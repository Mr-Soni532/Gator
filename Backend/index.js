const express = require('express');
const connectToMongo = require('./Config/db');
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/user')
app.use('/api/product')
app.use('/api/cartpage')
app.use('/api/wishlist')

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