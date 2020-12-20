import { HKSample, HKSampleJson } from './HKSample';
import { EntityType } from './EntityType';
import { HKWorkout, HKWorkoutJson } from './HKWorkout';
import { HKQuantitySample, HKQuantitySampleJson } from './HKQuantitySample';
import { HKCorrelation, HKCorrelationJson } from './HKCorrelation';
import { HKCategorySample, HKCategorySampleJson } from "./HKCategorySample";

export type SampleJson = HKCategorySampleJson | HKCorrelationJson | HKWorkoutJson | HKQuantitySampleJson | HKSampleJson;

export class HKSampleBuilder {
  static build(json?: SampleJson): HKSample | undefined {
    if (json) {
      switch (json.entityType) {
        case EntityType.category:
          return new HKCategorySample(json);
        case EntityType.correlation:
          return new HKCorrelation(json);
        // case EntityType.document:
          // return new HKDocumentSample(json);
        case EntityType.workout:
          return new HKWorkout(json);
        case EntityType.quantity:
          return new HKQuantitySample(json);
        default:
          return undefined;
      }
    }
    return undefined;
  }
}
