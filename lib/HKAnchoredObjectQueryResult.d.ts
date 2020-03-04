import HKSample from './HKSample';
import HKDeletedObject from './HKDeletedObject';
export default class HKAnchoredObjectQueryResult {
    samples: HKSample[];
    deleted: HKDeletedObject[];
    anchor?: any;
    constructor(json?: any);
}
