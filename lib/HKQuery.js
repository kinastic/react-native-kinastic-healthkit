import { NSPredicate } from './NSPredicate';
import { NSPredicateType } from './NSPredicateType';
import { HKQueryOptions } from './HKQueryOptions';
export class HKQuery {
    constructor(sampleType, predicate) {
        this.sampleType = sampleType;
        this.predicate = predicate ? new NSPredicate(predicate) : undefined;
    }
    toJS() {
        return {
            objectType: this.objectType,
            sampleType: this.sampleType,
            predicate: this.predicate ? this.predicate.toJS() : undefined,
        };
    }
    static predicateForCategorySamples(operator, value) {
        return new NSPredicate({
            type: NSPredicateType.categorySamples,
            operator,
            value,
        });
    }
    static predicateForClinicalRecords(fhirResourceType, source, identifier) {
        return new NSPredicate({
            type: NSPredicateType.clinicalRecords,
            fhirResourceType,
            source,
            identifier,
        });
    }
    static predicateForObject(uuid) {
        return new NSPredicate({
            type: NSPredicateType.object,
            uuid,
        });
    }
    static predicateForObjects(device, sourceRevisions, uuids, deviceProperty, allowedValues, metadataKey, operator, value) {
        return new NSPredicate({
            type: NSPredicateType.objects,
            device,
            sourceRevisions,
            uuids,
            deviceProperty,
            allowedValues,
            metadataKey,
            operator,
            value,
        });
    }
    static predicateForObjectsWithNoCorrelation() {
        return new NSPredicate({ type: NSPredicateType.objectsWithNoCorrelation });
    }
    static predicateForQuantitySamples(operator, value, unit) {
        return new NSPredicate({
            type: NSPredicateType.quantitySamples,
            operator,
            value,
            unit,
        });
    }
    static predicateForSamples(startDate, endDate, options = HKQueryOptions.strictStartDate) {
        return new NSPredicate({
            type: NSPredicateType.samples,
            startDate,
            endDate: endDate || Date.now(),
            options,
        });
    }
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
    static predicateForWorkouts(activityType, operator, duration, totalDistance, totalEnergyBurned, totalSwimmingStrokeCount, totalFlightsClimbed) {
        return new NSPredicate({
            type: NSPredicateType.workouts,
            activityType,
            operator,
            duration,
            totalDistance,
            totalEnergyBurned,
            totalSwimmingStrokeCount,
            totalFlightsClimbed,
        });
    }
}
//# sourceMappingURL=HKQuery.js.map