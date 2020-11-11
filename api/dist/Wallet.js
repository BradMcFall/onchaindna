"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallet = void 0;
class wallet {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.username = username;
        this.password = password;
    }
}
class Wallet {
    static create(event) {
        return new wallet(event.username, event.password);
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=Wallet.js.map