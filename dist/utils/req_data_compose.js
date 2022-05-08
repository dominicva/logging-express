"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Note param signature (req: Request | any)
ts didn't like using a string to access a property on Request type... let the learning continue!
*/
function reqDataCompose(req) {
    return function (data) {
        return data.map(({ prop, desc }) => ({
            name: `req.${prop}`,
            value: req[prop],
            description: desc,
        }));
    };
}
exports.default = reqDataCompose;
