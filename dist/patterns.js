"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var registry_1 = require("@musical-patterns/registry");
var constants_1 = require("./constants");
var materials_1 = require("./materials");
var material = {
    buildEntitiesFunction: materials_1.buildEntities,
    buildScalesFunction: materials_1.buildScales,
};
var metadata = {
    // tslint:disable-next-line:max-line-length
    description: 'pattern for qa\'ing performer, since ears are strong and it\'s hard to automatically test that it still sounds good',
    formattedName: 'Performer QA',
    musicalIdeaIllustrated: 'assure quality of all the things!',
};
var spec = {
    patternDurationScalar: constants_1.PERFORMER_QA_PATTERN_DURATION_SCALAR,
    patternPitchScalar: constants_1.PERFORMER_QA_PATTERN_PITCH_SCALAR,
};
exports.spec = spec;
var pattern = {
    material: material,
    metadata: metadata,
    patternId: registry_1.PatternId.PERFORMER_QA,
    spec: spec,
};
exports.pattern = pattern;
//# sourceMappingURL=patterns.js.map