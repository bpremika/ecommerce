"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const users_controller_1 = require("../controller/users.controller");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/register', users_controller_1.createUser);
exports.userRouter.post('/login', users_controller_1.login);
exports.userRouter.get('/logout', users_controller_1.logout);
