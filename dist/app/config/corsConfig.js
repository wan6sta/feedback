"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsConfig = void 0;
const appConstants_1 = require("./appConstants");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.corsConfig = {
    origin: [appConstants_1.appConstants.client_dev_url],
    optionsSuccessStatus: 200
};
