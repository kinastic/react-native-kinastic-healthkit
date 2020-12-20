import { HKSample, HKSampleJson } from './HKSample';
import { HKWorkoutJson } from './HKWorkout';
import { HKQuantitySampleJson } from './HKQuantitySample';
import { HKCorrelationJson } from './HKCorrelation';
import { HKCategorySampleJson } from "./HKCategorySample";
export declare type SampleJson = HKCategorySampleJson | HKCorrelationJson | HKWorkoutJson | HKQuantitySampleJson | HKSampleJson;
export declare class HKSampleBuilder {
    static build(json?: SampleJson): HKSample | undefined;
}
