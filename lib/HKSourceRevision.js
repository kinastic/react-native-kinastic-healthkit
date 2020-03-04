import { HKSource } from './HKSource';
export class HKSourceRevision {
    constructor(json) {
        this.source = new HKSource();
        this.operatingSystemVersion = '';
        if (json) {
            this.source = new HKSource(json.source);
            this.version = json.version;
            this.productType = json.productType;
            this.operatingSystemVersion = json.operatingSystemVersion;
        }
    }
    toJS() {
        return {
            source: this.source.toJS(),
            version: this.version,
            productType: this.productType,
            operatingSystemVersion: this.operatingSystemVersion,
        };
    }
}
//# sourceMappingURL=HKSourceRevision.js.map