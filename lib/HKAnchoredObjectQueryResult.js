import { HKDeletedObject } from './HKDeletedObject';
import { HKSampleBuilder } from './HKSampleBuilder';
import { notUndefined } from './notUndefined';
export class HKAnchoredObjectQueryResult {
    constructor(json) {
        var _a, _b;
        this.samples = [];
        this.deleted = [];
        if (json) {
            this.samples = ((_a = json.samples) !== null && _a !== void 0 ? _a : []).map((s) => HKSampleBuilder.build(s)).filter(notUndefined);
            this.deleted = ((_b = json.deleted) !== null && _b !== void 0 ? _b : []).map((d) => new HKDeletedObject(d));
            this.anchor = json.anchor;
        }
    }
}
//# sourceMappingURL=HKAnchoredObjectQueryResult.js.map