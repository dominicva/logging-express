"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = __importDefault(require("./colors"));
const { welcome } = colors_1.default;
const { log } = console;
const welcomeLog = () => log(`\n${welcome.heading(` Let's take a closer look at some \n 'stuff' on the express request object `)}\n\nPlease note that in order to log non-primitive values properly they have been passed through JSON.stringify. In case you were wondering why objects had double quotes everywhere...\n`);
exports.default = welcomeLog;
