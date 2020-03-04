import { EntityType } from './EntityType';
import { HKSample } from './HKSample';
export class HKCategorySample extends HKSample {
    constructor(json) {
        super(json);
        this.value = 0;
        if (json) {
            this.value = json.value;
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