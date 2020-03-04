import HKQuery from './HKQuery';
import { HKSampleType } from './HKSampleType';
import NSPredicate from './NSPredicate';
export default class HKAnchoredObjectQuery extends HKQuery<HKSampleType> {
    limit: number;
    anchor?: number;
    constructor(sampleType: HKSampleType, predicate?: NSPredicate, limit?: number, anchor?: number);
    toJS(): any;
}
