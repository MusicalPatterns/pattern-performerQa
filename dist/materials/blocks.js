"use strict";
// tslint:disable:no-magic-numbers
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("@musical-patterns/utilities");
var buildBlocks = function () {
    var firstBlock = utilities_1.to.Block([1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4]);
    var secondBlock = utilities_1.to.Block([7, 1, 6, 8, 1, 7, 3, 4, 2, 1]);
    return {
        firstBlock: firstBlock,
        secondBlock: secondBlock,
    };
};
exports.buildBlocks = buildBlocks;
//# sourceMappingURL=blocks.js.map