import { HKSampleType } from './HKSampleType';
import HKObject from './HKObject';
import { EntityType } from './EntityType';
export default class HKSample extends HKObject {
    sampleType?: HKSampleType;
    entityType: EntityType;
    startDate: Date;
    endDate: Date;
    constructor(json?: any);
    toJS(): any;
}
