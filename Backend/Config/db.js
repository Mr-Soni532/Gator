const mongoose = require('mongoose');
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connnected to Mongo');
    } catch (error) {
        console.log({ Error: error })
    }
}
module.exports = connectToMongo;