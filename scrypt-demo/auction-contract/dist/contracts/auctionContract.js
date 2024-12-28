"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionContract = void 0;
const scrypt_ts_1 = require("scrypt-ts");
class AuctionContract extends scrypt_ts_1.SmartContract {
    constructor(hash) {
        super(...arguments); // Pass arguments to the base class
        this.hash = hash;
    }
    unlock(message) {
        // Assert the hash matches the message
        (0, scrypt_ts_1.assert)((0, scrypt_ts_1.sha256)(message) === this.hash);
    }
}
exports.AuctionContract = AuctionContract;
__decorate([
    (0, scrypt_ts_1.prop)()
], AuctionContract.prototype, "hash", void 0);
__decorate([
    (0, scrypt_ts_1.method)()
], AuctionContract.prototype, "unlock", null);
//# sourceMappingURL=auctionContract.js.map