import { HKSample } from './HKSample';
import { HKDeletedObject } from './HKDeletedObject';
export declare class HKAnchoredObjectQueryResult {
    samples: HKSample[];
    deleted: HKDeletedObject[];
    anchor?: any;
    constructor(json?: any);
}
