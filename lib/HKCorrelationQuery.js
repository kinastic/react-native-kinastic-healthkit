import { NSPredicate } from './NSPredicate';
import { HKQuery } from './HKQuery';
export class HKCorrelationQuery extends HKQuery {
    constructor(sampleType, predicate, samplePredicates) {
        super(sampleType, predicate);
        this.samplePredicates = samplePredicates
            ? Object.keys(samplePredicates).reduce((prev, curr) => {
                const entry = samplePredicates[curr];
                if (entry) {
                    prev[curr] = new NSPredicate(entry);
                }
                return prev;
            }, {})
            : undefined;
    }
    toJS() {
        const { samplePredicates } = this;
        return Object.assign(super.toJS(), {
            samplePredicates: samplePredicates
                ? Object.keys(samplePredicates).reduce((prev, curr) => {
                    const entry = samplePredicates[curr];
                    if (entry) {
                        prev[curr] = entry.toJS();
                    }
                    return prev;
                }, {})
                : undefined,
        });
    }
}
//# sourceMappingURL=HKCorrelationQuery.js.map