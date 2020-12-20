import { EntityType } from './EntityType';
import { HKSample } from './HKSample';
export class HKCategorySample extends HKSample {
    constructor(json) {
        var _a;
        super(json);
        this.value = 0;
        if (json) {
            this.value = (_a = json.value) !== null && _a !== void 0 ? _a : 0;
        }
    }
    toJS() {
        return Object.assign(super.toJS(), {
            value: this.value,
        });
    }
    static build(value) {
        return new HKCategorySample({
            entityType: EntityType.category,
            value: value,
        });
    }
}
//# sourceMappingURL=HKCategorySample.js.map