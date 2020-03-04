import { NSPredicateType } from './NSPredicateType';
import { NSComparisonPredicateOperator } from './NSComparisonPredicateOperator {';
import HKSource from './HKSource';
import HKWorkout from './HKWorkout';
import HKDevice from './HKDevice';
import HKSourceRevision from './HKSourceRevision';
import { HKQueryOptions } from './HKQueryOptions';
import { HKFHIRResourceType } from './HKFHIRResourceType';
import { HKWorkoutActivityType } from './HKWorkoutActivityType';

export class NSPredicate {
  type: NSPredicateType = NSPredicateType.quantitySamples;
  operator?: NSComparisonPredicateOperator;
  value?: number;
  fhirResourceType?: HKFHIRResourceType;
  source?: HKSource;
  identifier?: string;
  uuid?: string;
  workout?: HKWorkout;
  device?: HKDevice[];
  sourceRevisions?: HKSourceRevision[];
  uuids?: string[];
  deviceProperty?: string;
  allowedValues?: string[];
  metadataKey?: string[];
  unit?: string;
  startDate?: Date;
  endDate?: Date;
  options?: HKQueryOptions;
  activityType?: HKWorkoutActivityType;
  duration?: number;
  totalDistance?: number;
  totalEnergyBurned?: number;
  totalSwimmingStrokeCount?: number;
  totalFlightsClimbed?: number;

  constructor(json?: any) {
    if (json) {
      this.type = json.type;
      this.operator = json.operator;
      this.value = json.value;
      this.fhirResourceType = json.fhirResourceType;
      this.source = json.source ? new HKSource(json.source) : undefined;
      this.identifier = json.identifier;
      this.uuid = json.uuid;
      this.workout = json.workout ? new HKWorkout(json.workout) : undefined;
      this.device = json.device ? json.device.map((d: any) => new HKDevice(d)) : undefined;
      this.sourceRevisions = json.sourceRevisions
        ? json.sourceRevisions.map((s: any) => new HKSourceRevision(s))
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

  toJS(): any {
    return {
      type: this.type,
      operator: this.operator,
      value: this.value,
      fhirResourceType: this.fhirResourceType,
      source: this.source ? this.source.toJS() : undefined,
      identifier: this.identifier,
      uuid: this.uuid,
      workout: this.workout ? this.workout.toJS() : undefined,
      device: this.device ? this.device.map((d: HKDevice) => d.toJS()) : undefined,
      sourceRevisions: this.sourceRevisions
        ? this.sourceRevisions.map((s: HKSourceRevision) => s.toJS())
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
  }
}
