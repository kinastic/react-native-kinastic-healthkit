import { HKSampleType } from './HKSampleType';
import { HKQuery, HKQueryJson } from './HKQuery';
import { NSPredicateJson } from './NSPredicate';
export declare type HKAnchoredObjectQueryJson = HKQueryJson<HKSampleType> & {
    limit: number;
    anchor?: number;
};
export declare class HKAnchoredObjectQuery extends HKQuery<HKSampleType> {
    limit: number;
    anchor?: number;
    constructor(sampleType: HKSampleType, predicate?: NSPredicateJson, limit?: number, anchor?: number);
    toJS(): HKAnchoredObjectQueryJson;
}
