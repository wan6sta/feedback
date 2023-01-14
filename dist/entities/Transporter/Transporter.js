"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporterBuilder = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporterBuilder = () => {
    return nodemailer_1.default.createTransport({
        host: 'sccg228@gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
            user: 'sccg228@gmail.com',
            pass: process.env.GMAIL_PASS
        }
    });
};
exports.transporterBuilder = transporterBuilder;
