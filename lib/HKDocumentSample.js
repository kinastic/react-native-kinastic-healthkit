import { HKSample } from './HKSample';
import { EntityType } from './EntityType';
export class HKDocumentSample extends HKSample {
    constructor(json) {
        super(json);
    }
    toJS() {
        return super.toJS();
    }
    static build() {
        return new HKDocumentSample({
            entityType: EntityType.document,
        });
    }
}
//# sourceMappingURL=HKDocumentSample.js.map