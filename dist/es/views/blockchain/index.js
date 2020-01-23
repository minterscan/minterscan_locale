"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const profiles_1 = tslib_1.__importDefault(require("./profiles"));
const profiles_2 = tslib_1.__importDefault(require("./profiles"));
const proposal_1 = tslib_1.__importDefault(require("./proposal"));
const proposals_1 = tslib_1.__importDefault(require("./proposals"));
exports.default = {
    votes: profiles_1.default,
    profiles: profiles_2.default,
    proposal: proposal_1.default,
    proposals: proposals_1.default
};
//# sourceMappingURL=index.js.map