const jwt = require('jsonwebtoken');
const UserModel = require('../Model/user.model');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const authorization = async(req,res,next)=>{
    try {
        const token = req.headers['authorization'];
        if(token){
            const data = jwt.verify(token, JWT_SECRET);
            req.userID = data;
            next();    
        }else{
            res.status(403).send('Login required');
        }
    } catch (error) {
        res.json({error: error.message});
        console.log(error)
    }
}
module.exports = authorization;