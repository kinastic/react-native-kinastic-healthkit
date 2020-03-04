import { HKMetadata } from "./HKMetadata";
import { HKSource } from "./HKSource";
import { HKSourceRevision } from "./HKSourceRevision";
import { HKDevice } from "./HKDevice";
export declare class HKObject {
    uuid: string;
    /**
     * @deprecated iOS 9.0
     */
    source?: HKSource;
    sourceRevision?: HKSourceRevision;
    device?: HKDevice;
    metadata?: HKMetadata;
    constructor(json?: any);
    toJS(): any;
}
