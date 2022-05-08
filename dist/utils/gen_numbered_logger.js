"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("./colors"));
const { info, regular, success, warning } = colors_1.default;
const { log } = console;
const genNumberedLogger = (itemNum = 0) => ({ name, value, description }) => {
    log(`${info.heading(` ${itemNum++}. ${name} `)}\n\n${info.text(description)}\n`);
    log(`${regular.text(`Type: ${regular.metaData(typeof value)}\nCurrent ${name} value:`)} ${value ? success.text(JSON.stringify(value)) : warning.text(value)}\n\n`);
};
exports.default = genNumberedLogger;
