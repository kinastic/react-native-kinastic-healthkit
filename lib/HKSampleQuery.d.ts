import { HKQuery } from './HKQuery';
import { NSSortDescriptor, NSSortDescriptorJson } from './NSSortDescriptor';
import { HKSampleType } from "./HKSampleType";
import { NSPredicateJson } from "./NSPredicate";
export declare class HKSampleQuery extends HKQuery<HKSampleType> {
    limit: number;
    sort?: NSSortDescriptor[];
    constructor(sampleType: HKSampleType, predicate?: NSPredicateJson, limit?: number, sort?: NSSortDescriptorJson[]);
    toJS(): any;
}
