import { HKMetadata } from "./HKMetadata";
import { HKSource, HKSourceJson } from "./HKSource";
import { HKSourceRevision, HKSourceRevisionJson } from "./HKSourceRevision";
import { HKDevice, HKDeviceJson } from "./HKDevice";

export type HKObjectJson = {
    uuid: string;
    source?: HKSourceJson;
    sourceRevision?: HKSourceRevisionJson;
    device?: HKDeviceJson;
    metadata?: HKMetadata;
}

export class HKObject {
    uuid: string = '';

    /**
     * @deprecated iOS 9.0
     */
    source?: HKSource = new HKSource();
    sourceRevision?: HKSourceRevision;
    device?: HKDevice;
    metadata?: HKMetadata;

    constructor(json?: Partial<HKObjectJson>) {
        if (json) {
            this.uuid = json.uuid ?? '';
            this.source = json.source ? new HKSource(json.source) : undefined;
            this.sourceRevision = json.sourceRevision ? new HKSourceRevision(json.sourceRevision) : undefined;
            this.device = json.device ? new HKDevice(json.device) : undefined;
            this.metadata = json.metadata;
        }
    }

    toJS(): HKObjectJson {
        return {
            uuid: this.uuid,
            source: this.source ? this.source.toJS() : undefined,
            sourceRevision: this.sourceRevision ? this.sourceRevision.toJS() : undefined,
            device: this.device ? this.device.toJS() : undefined,
            metadata: this.metadata,
        };
    }
}
