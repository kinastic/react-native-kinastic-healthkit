import { HKQuery } from './HKQuery';
import { NSSortDescriptor } from './NSSortDescriptor';
import { HKSampleType } from "./HKSampleType";
import { NSPredicate } from "./NSPredicate";
export declare class HKSampleQuery extends HKQuery<HKSampleType> {
    limit: number;
    sort?: NSSortDescriptor[];
    constructor(sampleType: HKSampleType, predicate?: NSPredicate, limit?: number, sort?: NSSortDescriptor[]);
    toJS(): any;
}
