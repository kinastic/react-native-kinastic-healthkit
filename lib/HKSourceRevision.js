import { HKSource } from './HKSource';
export class HKSourceRevision {
    constructor(json) {
        var _a;
        this.source = new HKSource();
        this.operatingSystemVersion = '';
        if (json) {
            this.source = new HKSource(json.source);
            this.version = json.version;
            this.productType = json.productType;
            this.operatingSystemVersion = (_a = json.operatingSystemVersion) !== null && _a !== void 0 ? _a : '';
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