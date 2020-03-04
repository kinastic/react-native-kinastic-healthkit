import HKQuery from './HKQuery';
import NSPredicate from './NSPredicate';
import { HKCorrelationType } from './HKCorrelationType';
export interface HKCorrelationQuerySamplePredicates {
    [key: string]: NSPredicate;
}
export default class HKCorrelationQuery extends HKQuery<HKCorrelationType> {
    samplePredicates?: HKCorrelationQuerySamplePredicates;
    constructor(sampleType: HKCorrelationType, predicate?: NSPredicate, samplePredicates?: HKCorrelationQuerySamplePredicates);
    toJS(): any;
}
