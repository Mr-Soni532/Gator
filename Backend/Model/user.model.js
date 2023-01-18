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
    gender: {
        type: String,
        require: true
    }
})
const UserModel = mongoose.Model('user', userShema);
module.exports = UserModel;