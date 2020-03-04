"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntityType_1 = require("./EntityType");
var HKWorkout_1 = require("./HKWorkout");
var HKQuantitySample_1 = require("./HKQuantitySample");
var HKCorrelation_1 = require("./HKCorrelation");
var HKCategorySample_1 = require("./HKCategorySample");
var HKDocumentSample_1 = require("./HKDocumentSample");
var HKSampleBuilder = /** @class */ (function () {
    function HKSampleBuilder() {
    }
    HKSampleBuilder.build = function (json) {
        if (json) {
            switch (json.entityType) {
                case EntityType_1.EntityType.category:
                    return new HKCategorySample_1.default(json);
                case EntityType_1.EntityType.correlation:
                    return new HKCorrelation_1.default(json);
                case EntityType_1.EntityType.document:
                    return new HKDocumentSample_1.default(json);
                case EntityType_1.EntityType.workout:
                    return new HKWorkout_1.default(json);
                case EntityType_1.EntityType.quantity:
                    return new HKQuantitySample_1.default(json);
                default:
                    return undefined;
            }
        }
        return undefined;
    };
    return HKSampleBuilder;
}());
exports.default = HKSampleBuilder;
