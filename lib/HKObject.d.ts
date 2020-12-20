import { HKMetadata } from "./HKMetadata";
import { HKSource, HKSourceJson } from "./HKSource";
import { HKSourceRevision, HKSourceRevisionJson } from "./HKSourceRevision";
import { HKDevice, HKDeviceJson } from "./HKDevice";
export declare type HKObjectJson = {
    uuid: string;
    source?: HKSourceJson;
    sourceRevision?: HKSourceRevisionJson;
    device?: HKDeviceJson;
    metadata?: HKMetadata;
};
export declare class HKObject {
    uuid: string;
    /**
     * @deprecated iOS 9.0
     */
    source?: HKSource;
    sourceRevision?: HKSourceRevision;
    device?: HKDevice;
    metadata?: HKMetadata;
    constructor(json?: Partial<HKObjectJson>);
    toJS(): HKObjectJson;
}
