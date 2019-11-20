"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const tx_1 = tslib_1.__importDefault(require("./tx"));
const txs_1 = tslib_1.__importDefault(require("./txs"));
const cats_1 = tslib_1.__importDefault(require("./cats"));
const auth_1 = tslib_1.__importDefault(require("./auth"));
const block_1 = tslib_1.__importDefault(require("./block"));
const coins_1 = tslib_1.__importDefault(require("./coins"));
const account_1 = tslib_1.__importDefault(require("./account"));
const blocks_1 = tslib_1.__importDefault(require("./blocks"));
const address_1 = tslib_1.__importDefault(require("./address"));
const validator_1 = tslib_1.__importDefault(require("./validator"));
const validators_1 = tslib_1.__importDefault(require("./validators"));
const delegators_1 = tslib_1.__importDefault(require("./delegators"));
const faq_1 = tslib_1.__importDefault(require("./faq"));
const api_1 = tslib_1.__importDefault(require("./api"));
const zen_1 = tslib_1.__importDefault(require("./zen"));
const pages_1 = tslib_1.__importDefault(require("./pages"));
const promo_1 = tslib_1.__importDefault(require("./promo"));
const blockchain_1 = tslib_1.__importDefault(require("./blockchain"));
exports.default = {
    tx: tx_1.default,
    txs: txs_1.default,
    cats: cats_1.default,
    auth: auth_1.default,
    block: block_1.default,
    blocks: blocks_1.default,
    coins: coins_1.default,
    account: account_1.default,
    address: address_1.default,
    validator: validator_1.default,
    validators: validators_1.default,
    delegators: delegators_1.default,
    api: api_1.default,
    zen: zen_1.default,
    faq: faq_1.default,
    pages: pages_1.default,
    promo: promo_1.default,
    blockchain: blockchain_1.default
};
//# sourceMappingURL=index.js.map