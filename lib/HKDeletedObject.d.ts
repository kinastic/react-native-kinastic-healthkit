import { HKMetadata } from './HKMetadata';
export declare type HKDeletedObjectJson = {
    uuid: string;
    metadata?: HKMetadata;
};
export declare class HKDeletedObject {
    uuid: string;
    metadata?: HKMetadata;
    constructor(json?: Partial<HKDeletedObjectJson>);
}
