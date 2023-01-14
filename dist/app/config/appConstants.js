"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConstants = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.appConstants = {
    isDev: process.env.IS_DEV === 'true' || false,
    port: Number(process.env.PORT) || 8080,
    client_dev_url: process.env.CLIENT_DEV_URL || 'http://localhost:3000 ',
    client_prod_url: process.env.CLIENT_PROD_URL || 'https://portfolio-wan6sta.vercel.app',
    gmail_pass: String(process.env.GMAIL_PASS)
};
