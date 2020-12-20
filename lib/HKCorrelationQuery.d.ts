import { HKCorrelationType } from './HKCorrelationType';
import { NSPredicate, NSPredicateJson } from './NSPredicate';
import { HKQuery, HKQueryJson } from './HKQuery';
export declare type HKCorrelationQuerySamplePredicatesJson = {
    [key: string]: NSPredicateJson;
};
export declare type HKCorrelationQuerySamplePredicates = {
    [key: string]: NSPredicate;
};
export declare type HKCorrelationQueryJson = HKQueryJson<HKCorrelationType> & {
    samplePredicates?: HKCorrelationQuerySamplePredicatesJson;
};
export declare class HKCorrelationQuery extends HKQuery<HKCorrelationType> {
    samplePredicates?: HKCorrelationQuerySamplePredicates;
    constructor(sampleType: HKCorrelationType, predicate?: NSPredicateJson, samplePredicates?: HKCorrelationQuerySamplePredicatesJson);
    toJS(): HKCorrelationQueryJson;
}
