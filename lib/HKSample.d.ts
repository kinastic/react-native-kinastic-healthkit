import { HKSampleType } from './HKSampleType';
import { HKObject, HKObjectJson } from './HKObject';
import { EntityType } from './EntityType';
export declare type HKSampleJson = HKObjectJson & {
    sampleType?: HKSampleType;
    entityType: EntityType;
    startDate: string;
    endDate: string;
};
export declare class HKSample extends HKObject {
    sampleType?: HKSampleType;
    entityType: EntityType;
    startDate: Date;
    endDate: Date;
    constructor(json?: Partial<HKSampleJson>);
    toJS(): HKSampleJson;
}
