import { HKCorrelationType } from './HKCorrelationType';
import { HKMetadata } from './HKMetadata';
import { HKSample, HKSampleJson } from './HKSample';
export declare type HKCorrelationJson = HKSampleJson & {
    objects: HKSampleJson[];
};
export declare class HKCorrelation extends HKSample {
    objects: HKSample[];
    constructor(json?: Partial<HKCorrelationJson>);
    toJS(): HKCorrelationJson;
    static build(id: string, sampleType: HKCorrelationType, startDate: Date, endDate: Date, objects: HKSample[], metadata?: HKMetadata): HKCorrelation;
}
