import { HKSample, HKSampleJson } from './HKSample';
import { HKQuantityType } from './HKQuantityType';
import { HKMetadata } from './HKMetadata';
export declare type HKQuantitySampleJson = HKSampleJson & {
    value: number;
    unit?: string;
};
export declare class HKQuantitySample extends HKSample {
    value: number;
    unit?: string;
    constructor(json?: Partial<HKQuantitySampleJson>);
    toJS(): HKQuantitySampleJson;
    static build(id: string, sampleType: HKQuantityType, startDate: Date, endDate: Date, value: number, metadata?: HKMetadata): HKQuantitySample;
}
