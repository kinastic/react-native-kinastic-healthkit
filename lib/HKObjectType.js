"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HKCharacteristicType_1 = require("./HKCharacteristicType");
var HKSampleType_1 = require("./HKSampleType");
var HKObjectTypes = __spreadArrays(HKCharacteristicType_1.HKCharacteristicTypes, HKSampleType_1.HKSampleTypes);
exports.default = HKObjectTypes;
