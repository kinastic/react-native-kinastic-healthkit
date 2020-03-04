import { HKSampleType } from './HKSampleType';
import { HKQuery } from './HKQuery';
import { NSPredicate } from './NSPredicate';
export declare class HKAnchoredObjectQuery extends HKQuery<HKSampleType> {
    limit: number;
    anchor?: number;
    constructor(sampleType: HKSampleType, predicate?: NSPredicate, limit?: number, anchor?: number);
    toJS(): any;
}
