"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const appConstants_1 = require("./app/config/appConstants");
const corsConfig_1 = require("./app/config/corsConfig");
const router_1 = require("./app/router/router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsConfig_1.corsConfig));
app.use('', router_1.router);
app.use(express_1.default.static('public'));
app.listen(appConstants_1.appConstants.port, () => {
    console.log(`[server]: Server is running at http://localhost:${appConstants_1.appConstants.port}`);
});
module.exports = app;
