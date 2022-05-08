"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gen_numbered_logger_1 = __importDefault(require("./utils/gen_numbered_logger"));
const welcome_log_1 = __importDefault(require("./utils/welcome_log"));
const req_data_compose_1 = __importDefault(require("./utils/req_data_compose"));
const data_1 = __importDefault(require("./data"));
function reqLogger(req, _res, next) {
    (0, welcome_log_1.default)();
    const buildMessages = (0, req_data_compose_1.default)(req);
    const messages = buildMessages(data_1.default);
    const customLog = (0, gen_numbered_logger_1.default)();
    for (const message of messages) {
        customLog(message);
    }
    next();
}
exports.default = reqLogger;
