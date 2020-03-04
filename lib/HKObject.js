import { HKSource } from "./HKSource";
import { HKSourceRevision } from "./HKSourceRevision";
import { HKDevice } from "./HKDevice";
export class HKObject {
    constructor(json) {
        this.uuid = '';
        /**
         * @deprecated iOS 9.0
         */
        this.source = new HKSource();
        if (json) {
            this.uuid = json.uuid;
            this.source = json.source ? new HKSource(json.source) : undefined;
            this.sourceRevision = json.sourceRevision ? new HKSourceRevision(json.sourceRevision) : undefined;
            this.device = json.device ? new HKDevice(json.device) : undefined;
            this.metadata = json.metadata;
        }
    }
    toJS() {
        return {
            uuid: this.uuid,
            source: this.source ? this.source.toJS() : undefined,
            sourceRevision: this.sourceRevision ? this.sourceRevision.toJS() : undefined,
            device: this.device ? this.device.toJS() : undefined,
            metadata: this.metadata,
        };
    }
}
//# sourceMappingURL=HKObject.js.map