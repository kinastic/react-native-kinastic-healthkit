import { HKSample } from './HKSample';
import { EntityType } from './EntityType';
import { HKMetadataKey } from './HKMetadataKey';
export class HKQuantitySample extends HKSample {
    constructor(json) {
        super(json);
        this.value = 0;
        if (json) {
            this.value = json.value;
            this.unit = json.unit;
        }
    }
    toJS() {
        return Object.assign(super.toJS(), {
            value: this.value,
            unit: this.unit,
        });
    }
    static build(id, sampleType, startDate, endDate, value, metadata) {
        const metadataValues = Object.assign({}, metadata, {
            HKExternalUUID: id,
            [HKMetadataKey.HKMetadataKeySyncIdentifier]: id,
            [HKMetadataKey.HKMetadataKeySyncVersion]: 1.0,
        });
        return new HKQuantitySample({
            entityType: EntityType.quantity,
            sampleType,
            startDate,
            endDate,
            value,
            metadata: metadataValues,
        });
    }
}
//# sourceMappingURL=HKQuantitySample.js.map