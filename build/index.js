"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const value_proposal_1 = require("./routes/value_proposal");
const exp = (0, express_1.default)();
exp.use(express_1.default.json());
exp.use("/", value_proposal_1.router);
const httpServer = http_1.default.createServer(exp);
const PORT = 8190;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
