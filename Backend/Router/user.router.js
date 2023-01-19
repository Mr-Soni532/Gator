const express = require('express');
const userRouter = express.Router();
const controller = require('../Controller/user.controller');
const authorization = require('../middleware/authorization.middleware');

userRouter.post('/register', controller.register);
userRouter.post('/login', controller.login);
userRouter.post('/fetchuser', authorization,controller.fetchUser);

module.exports = userRouter;