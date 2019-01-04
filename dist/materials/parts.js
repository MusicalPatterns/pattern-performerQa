"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var blocks_1 = require("./blocks");
var notes_1 = require("./notes");
var buildParts = function () {
    var _a = blocks_1.buildBlocks(), firstBlock = _a.firstBlock, secondBlock = _a.secondBlock;
    var firstPart = firstBlock.map(notes_1.buildNoteSpec);
    var secondPart = secondBlock.map(notes_1.buildNoteSpec);
    return {
        firstPart: firstPart,
        secondPart: secondPart,
    };
};
exports.buildParts = buildParts;
//# sourceMappingURL=parts.js.map