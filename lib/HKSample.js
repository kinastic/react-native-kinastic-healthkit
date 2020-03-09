import { HKObject } from './HKObject';
import { EntityType } from './EntityType';
export class HKSample extends HKObject {
    constructor(json) {
        super(json);
        // not from healthkit. Used to determine the right class.
        this.entityType = EntityType.quantity;
        this.startDate = new Date();
        this.endDate = new Date();
        if (json) {
            this.entityType = json.entityType || EntityType.quantity;
            this.sampleType = json.sampleType;
            this.startDate = new Date(json.startDate);
            this.endDate = new Date(json.endDate);
        }
    }
    toJS() {
        return Object.assign(super.toJS(), {
            entityType: this.entityType,
            sampleType: this.sampleType,
            startDate: this.startDate.toISOString(),
            endDate: this.endDate.toISOString(),
        });
    }
}
//# sourceMappingURL=HKSample.js.map