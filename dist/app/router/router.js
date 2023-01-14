"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const EmailController_1 = require("../controllers/EmailController");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    res.json('Feedback Server');
});
exports.router.post('/message', EmailController_1.emailController.sendOnEmail);
