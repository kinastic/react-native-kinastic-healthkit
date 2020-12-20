import { HKSample, HKSampleJson } from './HKSample';
import { HKDeletedObject, HKDeletedObjectJson } from './HKDeletedObject';
export declare type HKAnchoredObjectQueryResultJson = {
    samples: HKSampleJson[];
    deleted: HKDeletedObjectJson[];
    anchor?: any;
};
export declare class HKAnchoredObjectQueryResult {
    samples: HKSample[];
    deleted: HKDeletedObject[];
    anchor?: any;
    constructor(json?: Partial<HKAnchoredObjectQueryResultJson>);
}
