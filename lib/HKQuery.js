"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NSPredicate_1 = require("./NSPredicate");
var NSPredicateType_1 = require("./NSPredicateType");
var HKQueryOptions_1 = require("./HKQueryOptions");
var HKQuery = /** @class */ (function () {
    function HKQuery(sampleType, predicate) {
        this.sampleType = sampleType;
        this.predicate = predicate ? new NSPredicate_1.default(predicate) : undefined;
    }
    HKQuery.prototype.toJS = function () {
        return {
            objectType: this.objectType,
            sampleType: this.sampleType,
            predicate: this.predicate ? this.predicate.toJS() : undefined,
        };
    };
    HKQuery.predicateForCategorySamples = function (operator, value) {
        return new NSPredicate_1.default({
            type: NSPredicateType_1.NSPredicateType.categorySamples,
            operator: operator,
            value: value,
        });
    };
    HKQuery.predicateForClinicalRecords = function (fhirResourceType, source, identifier) {
        return new NSPredicate_1.default({
            type: NSPredicateType_1.NSPredicateType.clinicalRecords,
            fhirResourceType: fhirResourceType,
            source: source,
            identifier: identifier,
        });
    };
    HKQuery.predicateForObject = function (uuid) {
        return new NSPredicate_1.default({
            type: NSPredicateType_1.NSPredicateType.object,
            uuid: uuid,
        });
    };
    HKQuery.predicateForObjects = function (device, sourceRevisions, uuids, deviceProperty, allowedValues, metadataKey, operator, value) {
        return new NSPredicate_1.default({
            type: NSPredicateType_1.NSPredicateType.objects,
            device: device,
            sourceRevisions: sourceRevisions,
            uuids: uuids,
            deviceProperty: deviceProperty,
            allowedValues: allowedValues,
            metadataKey: metadataKey,
            operator: operator,
            value: value,
        });
    };
    HKQuery.predicateForObjectsWithNoCorrelation = function () {
        return new NSPredicate_1.default({ type: NSPredicateType_1.NSPredicateType.objectsWithNoCorrelation });
    };
    HKQuery.predicateForQuantitySamples = function (operator, value, unit) {
        return new NSPredicate_1.default({
            type: NSPredicateType_1.NSPredicateType.quantitySamples,
            operator: operator,
            value: value,
            unit: unit,
        });
    };
    HKQuery.predicateForSamples = function (startDate, endDate, options) {
        if (options === void 0) { options = HKQueryOptions_1.HKQueryOptions.strictStartDate; }
        return new NSPredicate_1.default({
            type: NSPredicateType_1.NSPredicateType.samples,
            startDate: startDate,
            endDate: endDate || Date.now(),
            options: options,
        });
    };
    /**
     *
     * @param activityType
     * @param operator
     * @param duration
     * @param totalDistance
     * @param totalEnergyBurned
     * @param totalSwimmingStrokeCount
     * @param totalFlightsClimbed iOS 11.0
     */
    HKQuery.predicateForWorkouts = function (activityType, operator, duration, totalDistance, totalEnergyBurned, totalSwimmingStrokeCount, totalFlightsClimbed) {
        return new NSPredicate_1.default({
            type: NSPredicateType_1.NSPredicateType.workouts,
            activityType: activityType,
            operator: operator,
            duration: duration,
            totalDistance: totalDistance,
            totalEnergyBurned: totalEnergyBurned,
            totalSwimmingStrokeCount: totalSwimmingStrokeCount,
            totalFlightsClimbed: totalFlightsClimbed,
        });
    };
    return HKQuery;
}());
exports.default = HKQuery;
