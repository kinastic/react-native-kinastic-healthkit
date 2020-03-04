import { HKSource } from './HKSource';
export declare class HKSourceRevision {
    source: HKSource;
    version?: string;
    productType?: string;
    operatingSystemVersion: string;
    constructor(json?: any);
    toJS(): any;
}
