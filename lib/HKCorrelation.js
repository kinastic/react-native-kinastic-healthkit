import { HKMetadataKey } from './HKMetadataKey';
import { EntityType } from './EntityType';
import { HKSample } from './HKSample';
import { HKSampleBuilder } from './HKSampleBuilder';
import { notUndefined } from './notUndefined';
export class HKCorrelation extends HKSample {
    constructor(json) {
        super(json);
        this.objects = [];
        if (json) {
            this.objects = (json.objects || []).map((o) => HKSampleBuilder.build(o)).filter(notUndefined);
        }
    }
    toJS() {
        return Object.assign(super.toJS(), {
            objects: this.objects.map((o) => o.toJS()),
        });
    }
    static build(id, sampleType, startDate, endDate, objects, metadata) {
        const metadataValues = Object.assign({}, metadata, {
            HKExternalUUID: id,
            [HKMetadataKey.HKMetadataKeySyncIdentifier]: id,
            [HKMetadataKey.HKMetadataKeySyncVersion]: 1.0,
        });
        return new HKCorrelation({
            entityType: EntityType.correlation,
            sampleType,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            objects: objects.map((o) => o.toJS()),
            metadata: metadataValues,
        });
    }
}
//# sourceMappingURL=HKCorrelation.js.map