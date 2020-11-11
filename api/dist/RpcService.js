"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RpcService = exports.rpcService = void 0;
const axios_1 = __importDefault(require("axios"));
class rpcService {
    constructor(avalancheNodeUrl, jsonRPCVersion) {
        this.avalancheNodeUrl = avalancheNodeUrl;
        this.jsonRPCVersion = jsonRPCVersion;
        this.id = 1;
        this.port = "9650";
    }
    getData(endPoint, method, params) {
        let url = 'http://' +
            this.avalancheNodeUrl + ':' +
            this.port + endPoint;
        return axios_1.default.post(url, {
            "jsonrpc": this.jsonRPCVersion,
            "method": method,
            "params": params,
            "id": this.id
        });
    }
}
exports.rpcService = rpcService;
class RpcService {
    static create(event) {
        return new rpcService(event.avalancheNodeUrl, event.jsonRPCVersion);
    }
}
exports.RpcService = RpcService;
//# sourceMappingURL=RpcService.js.map