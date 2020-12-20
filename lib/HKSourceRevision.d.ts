import { HKSource, HKSourceJson } from './HKSource';
export declare type HKSourceRevisionJson = {
    source: HKSourceJson;
    version?: string;
    productType?: string;
    operatingSystemVersion: string;
};
export declare class HKSourceRevision {
    source: HKSource;
    version?: string;
    productType?: string;
    operatingSystemVersion: string;
    constructor(json?: Partial<HKSourceRevisionJson>);
    toJS(): HKSourceRevisionJson;
}
