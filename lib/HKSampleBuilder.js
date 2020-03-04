import { EntityType } from './EntityType';
import { HKWorkout } from './HKWorkout';
import { HKQuantitySample } from './HKQuantitySample';
import { HKCorrelation } from './HKCorrelation';
import { HKCategorySample } from "./HKCategorySample";
import { HKDocumentSample } from "./HKDocumentSample";
export class HKSampleBuilder {
    static build(json) {
        if (json) {
            switch (json.entityType) {
                case EntityType.category:
                    return new HKCategorySample(json);
                case EntityType.correlation:
                    return new HKCorrelation(json);
                case EntityType.document:
                    return new HKDocumentSample(json);
                case EntityType.workout:
                    return new HKWorkout(json);
                case EntityType.quantity:
                    return new HKQuantitySample(json);
                default:
                    return undefined;
            }
        }
        return undefined;
    }
}
//# sourceMappingURL=HKSampleBuilder.js.map