const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    }
})
const UserModel = mongoose.model('user', userShema);
module.exports = UserModel;