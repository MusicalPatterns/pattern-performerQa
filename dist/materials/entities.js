"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compiler_1 = require("@musical-patterns/compiler");
var parts_1 = require("./parts");
var buildEntities = function () {
    var _a = parts_1.buildParts(), firstPart = _a.firstPart, secondPart = _a.secondPart;
    var firstEntity = {
        noteSpecs: firstPart,
        timbreName: compiler_1.TimbreNameEnum.SAW,
    };
    var secondEntity = {
        noteSpecs: secondPart,
        timbreName: compiler_1.TimbreNameEnum.PIANO,
    };
    return [
        firstEntity,
        secondEntity,
    ];
};
exports.buildEntities = buildEntities;
//# sourceMappingURL=entities.js.map