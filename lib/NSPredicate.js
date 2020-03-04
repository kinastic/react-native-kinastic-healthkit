"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NSPredicateType_1 = require("./NSPredicateType");
var HKSource_1 = require("./HKSource");
var HKWorkout_1 = require("./HKWorkout");
var HKDevice_1 = require("./HKDevice");
var HKSourceRevision_1 = require("./HKSourceRevision");
var NSPredicate = /** @class */ (function () {
    function NSPredicate(json) {
        this.type = NSPredicateType_1.NSPredicateType.quantitySamples;
        if (json) {
            this.type = json.type;
            this.operator = json.operator;
            this.value = json.value;
            this.fhirResourceType = json.fhirResourceType;
            this.source = json.source ? new HKSource_1.default(json.source) : undefined;
            this.identifier = json.identifier;
            this.uuid = json.uuid;
            this.workout = json.workout ? new HKWorkout_1.default(json.workout) : undefined;
            this.device = json.device ? json.device.map(function (d) { return new HKDevice_1.default(d); }) : undefined;
            this.sourceRevisions = json.sourceRevisions
                ? json.sourceRevisions.map(function (s) { return new HKSourceRevision_1.default(s); })
                : undefined;
            this.uuids = json.uuids;
            this.deviceProperty = json.deviceProperty;
            this.allowedValues = json.allowedValues;
            this.metadataKey = json.metadataKey;
            this.unit = json.unit;
            this.startDate = json.startDate ? new Date(json.startDate) : undefined;
            this.endDate = json.endDate ? new Date(json.endDate) : undefined;
            this.options = json.options;
            this.duration = json.duration;
            this.activityType = json.activityType;
            this.totalDistance = json.totalDistance;
            this.totalEnergyBurned = json.totalEnergyBurned;
            this.totalSwimmingStrokeCount = json.totalSwimmingStrokeCount;
            this.totalFlightsClimbed = json.totalFlightsClimbed;
        }
    }
    NSPredicate.prototype.toJS = function () {
        return {
            type: this.type,
            operator: this.operator,
            value: this.value,
            fhirResourceType: this.fhirResourceType,
            source: this.source ? this.source.toJS() : undefined,
            identifier: this.identifier,
            uuid: this.uuid,
            workout: this.workout ? this.workout.toJS() : undefined,
            device: this.device ? this.device.map(function (d) { return d.toJS(); }) : undefined,
            sourceRevisions: this.sourceRevisions
                ? this.sourceRevisions.map(function (s) { return s.toJS(); })
                : undefined,
            uuids: this.uuids,
            deviceProperty: this.deviceProperty,
            allowedValues: this.allowedValues,
            metadataKey: this.metadataKey,
            unit: this.unit,
            startDate: this.startDate ? this.startDate.toISOString() : undefined,
            endDate: this.endDate ? this.endDate.toISOString() : undefined,
            options: this.options,
            duration: this.duration,
            activityType: this.activityType,
            totalDistance: this.totalDistance,
            totalEnergyBurned: this.totalEnergyBurned,
            totalSwimmingStrokeCount: this.totalSwimmingStrokeCount,
            totalFlightsClimbed: this.totalFlightsClimbed,
        };
    };
    return NSPredicate;
}());
exports.default = NSPredicate;
