import { HKCorrelationType } from './HKCorrelationType';
import { NSPredicate } from './NSPredicate';
import { HKQuery } from './HKQuery';
export interface HKCorrelationQuerySamplePredicates {
    [key: string]: NSPredicate;
}
export declare class HKCorrelationQuery extends HKQuery<HKCorrelationType> {
    samplePredicates?: HKCorrelationQuerySamplePredicates;
    constructor(sampleType: HKCorrelationType, predicate?: NSPredicate, samplePredicates?: HKCorrelationQuerySamplePredicates);
    toJS(): any;
}
