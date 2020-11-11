"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handlers_1 = require("./handlers");
const RpcService_1 = require("./RpcService");
const app = express_1.default();
const port = process.env.PORT || '8000';
app.get('/', handlers_1.rootHandler);
app.get('/hello/:name', handlers_1.helloHandler);
const blockchainIp = '127.0.0.1';
const RPC = RpcService_1.RpcService.create({ avalancheNodeUrl: blockchainIp, jsonRPCVersion: "2.0" });
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
});
//# sourceMappingURL=index.js.map