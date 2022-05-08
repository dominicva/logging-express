"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const colorPalette = {
    welcome: {
        text: chalk_1.default.yellowBright.bold,
        heading: chalk_1.default.black.bgYellowBright.bold,
    },
    success: {
        text: chalk_1.default.green,
        heading: chalk_1.default.black.bold.bgGreenBright,
    },
    info: {
        text: chalk_1.default.blue,
        heading: chalk_1.default.black.bold.bgBlueBright,
    },
    warning: {
        text: chalk_1.default.hex('#FFA500'),
        heading: chalk_1.default.white.bgHex('#FFA500'),
    },
    regular: {
        text: chalk_1.default.white,
        metaData: chalk_1.default.yellowBright,
    },
};
exports.default = colorPalette;
