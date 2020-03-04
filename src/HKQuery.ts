import { HKObjectType } from './HKObjectType';
import { NSPredicate } from './NSPredicate';
import { NSComparisonPredicateOperator } from './NSComparisonPredicateOperator {';
import { HKFHIRResourceType } from './HKFHIRResourceType';
import { NSPredicateType } from './NSPredicateType';
import { HKSource } from './HKSource';
import { HKDevice } from './HKDevice';
import { HKSourceRevision } from './HKSourceRevision';
import { HKQueryOptions } from './HKQueryOptions';
import { HKWorkoutActivityType } from './HKWorkoutActivityType';

export class HKQuery<T> {
  objectType?: HKObjectType;
  sampleType?: T;
  predicate?: NSPredicate;

  constructor(sampleType: T, predicate?: NSPredicate) {
    this.sampleType = sampleType;
    this.predicate = predicate ? new NSPredicate(predicate) : undefined;
  }

  toJS(): any {
    return {
      objectType: this.objectType,
      sampleType: this.sampleType,
      predicate: this.predicate ? this.predicate.toJS() : undefined,
    };
  }

  static predicateForCategorySamples(
    operator: NSComparisonPredicateOperator,
    value: number,
  ): NSPredicate {
    return new NSPredicate({
      type: NSPredicateType.categorySamples,
      operator,
      value,
    });
  }

  static predicateForClinicalRecords(
    fhirResourceType: HKFHIRResourceType,
    source?: HKSource,
    identifier?: string,
  ): NSPredicate {
    return new NSPredicate({
      type: NSPredicateType.clinicalRecords,
      fhirResourceType,
      source,
      identifier,
    });
  }

  static predicateForObject(uuid: string): NSPredicate {
    return new NSPredicate({
      type: NSPredicateType.object,
      uuid,
    });
  }

  static predicateForObjects(
    device?: HKDevice[],
    sourceRevisions?: HKSourceRevision[],
    uuids?: string[],
    deviceProperty?: string,
    allowedValues?: string[],
    metadataKey?: string,
    operator?: NSComparisonPredicateOperator,
    value?: any,
  ): NSPredicate {
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

  static predicateForObjectsWithNoCorrelation(): NSPredicate {
    return new NSPredicate({ type: NSPredicateType.objectsWithNoCorrelation });
  }

  static predicateForQuantitySamples(
    operator: NSComparisonPredicateOperator,
    value: number,
    unit: string,
  ): NSPredicate {
    return new NSPredicate({
      type: NSPredicateType.quantitySamples,
      operator,
      value,
      unit,
    });
  }

  static predicateForSamples(
    startDate: Date,
    endDate?: Date,
    options: HKQueryOptions = HKQueryOptions.strictStartDate,
  ): NSPredicate {
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
  static predicateForWorkouts(
    activityType?: HKWorkoutActivityType,
    operator?: NSComparisonPredicateOperator,
    duration?: number,
    totalDistance?: number,
    totalEnergyBurned?: number,
    totalSwimmingStrokeCount?: number,
    totalFlightsClimbed?: number,
  ): NSPredicate {
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
