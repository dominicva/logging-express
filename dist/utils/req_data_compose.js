"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reqDataCompose(expressRequest) {
    return function (data) {
        return data.map(({ prop, desc }) => ({
            name: `req.${prop}`,
            value: expressRequest[prop],
            description: desc,
        }));
    };
}
exports.default = reqDataCompose;
