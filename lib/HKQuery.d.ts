import { HKObjectType } from './HKObjectType';
import { NSPredicate, NSPredicateJson } from './NSPredicate';
import { NSComparisonPredicateOperator } from './NSComparisonPredicateOperator {';
import { HKFHIRResourceType } from './HKFHIRResourceType';
import { HKSource } from './HKSource';
import { HKDevice } from './HKDevice';
import { HKSourceRevision } from './HKSourceRevision';
import { HKQueryOptions } from './HKQueryOptions';
import { HKWorkoutActivityType } from './HKWorkoutActivityType';
export declare type HKQueryJson<T> = {
    objectType?: HKObjectType;
    sampleType?: T;
    predicate?: NSPredicateJson;
};
export declare class HKQuery<T> {
    objectType?: HKObjectType;
    sampleType?: T;
    predicate?: NSPredicate;
    constructor(sampleType: T, predicate?: NSPredicateJson);
    toJS(): HKQueryJson<T>;
    static predicateForCategorySamples(operator: NSComparisonPredicateOperator, value: number): NSPredicate;
    static predicateForClinicalRecords(fhirResourceType: HKFHIRResourceType, source?: HKSource, identifier?: string): NSPredicate;
    static predicateForObject(uuid: string): NSPredicate;
    static predicateForObjects(device?: HKDevice[], sourceRevisions?: HKSourceRevision[], uuids?: string[], deviceProperty?: string, allowedValues?: string[], metadataKey?: string[], operator?: NSComparisonPredicateOperator, value?: any): NSPredicate;
    static predicateForObjectsWithNoCorrelation(): NSPredicate;
    static predicateForQuantitySamples(operator: NSComparisonPredicateOperator, value: number, unit: string): NSPredicate;
    static predicateForSamples(startDate: Date, endDate?: Date, options?: HKQueryOptions): NSPredicate;
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
    static predicateForWorkouts(activityType?: HKWorkoutActivityType, operator?: NSComparisonPredicateOperator, duration?: number, totalDistance?: number, totalEnergyBurned?: number, totalSwimmingStrokeCount?: number, totalFlightsClimbed?: number): NSPredicate;
}
