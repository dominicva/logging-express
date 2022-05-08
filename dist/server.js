"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*

Here's a simple express server.
Try bunch of request urls and see what logs you get!

*/
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const main_1 = __importDefault(require("./main"));
dotenv_1.default.config();
const port = process.env.SERVER_PORT ?? 4000;
const app = (0, express_1.default)();
// only required if client wants to send json in the request body
// app.use(express.json());
app.use(express_1.default.urlencoded({ extended: true }));
// note customLog gets passed as the second argument here
app.get('/facts/:name/:favSport/:leastFavFood', main_1.default, (_req, res) => {
    res.send({ message: 'Fingers crossed we got some nice server logs' });
});
app.listen(port, () => console.log(`Sever running on port: ${port}`));
