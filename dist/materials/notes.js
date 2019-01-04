"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pattern_1 = require("@musical-patterns/pattern");
var utilities_1 = require("@musical-patterns/utilities");
var constants_1 = require("./constants");
var buildNoteSpec = function (blockElement) {
    return ({
        durationSpec: {
            scalar: utilities_1.to.Scalar(blockElement),
            scaleIndex: pattern_1.DEFAULT_DURATIONS_SCALE_INDEX,
        },
        pitchSpec: {
            index: utilities_1.to.Index(blockElement),
            scaleIndex: pattern_1.DEFAULT_PITCH_SCALE_INDEX,
        },
        positionSpec: [
            {
                scalar: utilities_1.to.Scalar(utilities_1.apply.Offset(blockElement, constants_1.CENTER_BLOCKS_ON_ORIGIN)),
            },
            {
                scalar: utilities_1.to.Scalar(utilities_1.apply.Offset(blockElement, constants_1.CENTER_BLOCKS_ON_ORIGIN)),
            },
            {
                scalar: utilities_1.to.Scalar(utilities_1.apply.Offset(blockElement, constants_1.CENTER_BLOCKS_ON_ORIGIN)),
            },
        ],
    });
};
exports.buildNoteSpec = buildNoteSpec;
//# sourceMappingURL=notes.js.map