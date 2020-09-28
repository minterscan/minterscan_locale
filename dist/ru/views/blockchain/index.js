"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const votes_1 = tslib_1.__importDefault(require("./votes"));
const comments_1 = tslib_1.__importDefault(require("./comments"));
const profiles_1 = tslib_1.__importDefault(require("./profiles"));
const proposal_1 = tslib_1.__importDefault(require("./proposal"));
const proposals_1 = tslib_1.__importDefault(require("./proposals"));
exports.default = {
    votes: votes_1.default,
    comments: comments_1.default,
    profiles: profiles_1.default,
    proposal: proposal_1.default,
    proposals: proposals_1.default
};
//# sourceMappingURL=index.js.map