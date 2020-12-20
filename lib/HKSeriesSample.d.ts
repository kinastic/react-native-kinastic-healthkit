import { HKSample, HKSampleJson } from './HKSample';
export declare type HKSeriesSampleJson = HKSampleJson & {
    count: number;
};
export declare class HKSeriesSample extends HKSample {
    count: number;
    constructor(json?: Partial<HKSeriesSampleJson>);
    toJS(): HKSeriesSampleJson;
}
