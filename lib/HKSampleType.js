"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HKQuantityType_1 = require("./HKQuantityType");
var HKCategoryType_1 = require("./HKCategoryType");
var HKCorrelationType_1 = require("./HKCorrelationType");
var HKDocumentType_1 = require("./HKDocumentType");
var HKSeriesType_1 = require("./HKSeriesType");
var HKObjectSampleType;
(function (HKObjectSampleType) {
    HKObjectSampleType["workout"] = "workout";
    HKObjectSampleType["CDA"] = "CDA";
    HKObjectSampleType["audiogram"] = "audiogram";
})(HKObjectSampleType = exports.HKObjectSampleType || (exports.HKObjectSampleType = {}));
exports.HKSampleTypes = __spreadArrays(HKQuantityType_1.HKQuantityTypes, HKCategoryType_1.HKCategoryTypes, HKCorrelationType_1.HKCorrelationTypes, HKDocumentType_1.HKDocumentTypes, HKSeriesType_1.HKSeriesTypes, Object.keys(HKObjectSampleType));
exports.HKObjectSampleTypes = Object.keys(HKObjectSampleType);
