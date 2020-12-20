import { HKSample, HKSampleJson } from './HKSample';
export declare type HKCategorySampleJson = HKSampleJson & {
    value: number;
};
export declare class HKCategorySample extends HKSample {
    value: number;
    constructor(json?: Partial<HKCategorySampleJson>);
    toJS(): HKCategorySampleJson;
    static build(value: number): HKCategorySample;
}
