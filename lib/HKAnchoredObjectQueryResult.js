import { HKDeletedObject } from './HKDeletedObject';
import { HKSampleBuilder } from './HKSampleBuilder';
export class HKAnchoredObjectQueryResult {
    constructor(json) {
        this.samples = [];
        this.deleted = [];
        if (json) {
            this.samples = (json.samples || []).map((s) => HKSampleBuilder.build(s));
            this.deleted = (json.deleted || []).map((d) => new HKDeletedObject(d));
            this.anchor = json.anchor;
        }
    }
}
//# sourceMappingURL=HKAnchoredObjectQueryResult.js.map