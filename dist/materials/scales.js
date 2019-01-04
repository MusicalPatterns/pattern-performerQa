"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pattern_1 = require("@musical-patterns/pattern");
var utilities_1 = require("@musical-patterns/utilities");
var buildScales = function (patternSpec) {
    var _a = pattern_1.buildStandardScales(), nonScale = _a.nonScale, flatDurationsScale = _a.flatDurationsScale;
    var gainScale = nonScale;
    var durationsScale = {
        offset: patternSpec.patternDurationOffset || utilities_1.to.Offset(0),
        scalar: patternSpec.patternDurationScalar || utilities_1.to.Scalar(1),
        scalars: flatDurationsScale.scalars,
    };
    var pitchesScale = {
        offset: patternSpec.patternPitchOffset || utilities_1.to.Offset(0),
        scalar: patternSpec.patternPitchScalar || utilities_1.to.Scalar(1),
        scalars: flatDurationsScale.scalars,
    };
    return [
        gainScale,
        durationsScale,
        pitchesScale,
    ];
};
exports.buildScales = buildScales;
//# sourceMappingURL=scales.js.map