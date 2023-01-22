const UserModel = require("../Model/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
    const { email, password, number, name } = req.body;
    try {
        const user = await UserModel.find({ email });
        if (user.length) {
           return res.status(403).json({ Error: "User already exsisted!" })
        }
        await bcrypt.hash(password, 10, async (err, hash) => {
            if (err) return res.json({ err: err.message });
            let newUser = new UserModel({ email, password: hash, number, name });
            await newUser.save();
            res.status(201).json({ message: 'User has been created.' });
        })
    } catch (error) {
        res.status(500).json({ Error: error.message })
        console.log(error)
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.find({ email })
        if (!user.length) {
            return res.status(404).json({ message: 'Invalid Credentials' })
        }
        bcrypt.compare(password, user[0].password, (err, result) => {
            if (err) return res.send({ message: err.message });
            if (result) {
                const token = jwt.sign(user[0].id, JWT_SECRET);
                res.json({ token });
            } else {
               return res.status(403).json({ message: "Invalid Credentials" })
            }
        })
    } catch (error) {
        res.status(500).json({ Error: error.message })
        console.log(error)
    }
}
//! Login required:
exports.fetchUser = async (req,res)=>{
    const ID = req.userID;
    try {
        const user = await UserModel.findById(ID);
        res.send(user);
    } catch (error) {
        res.json({error: error.message})
        console.log(error)
    }
}