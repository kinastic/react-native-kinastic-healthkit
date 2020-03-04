import { HKQuery } from './HKQuery';
import { NSSortDescriptor } from './NSSortDescriptor';
export class HKSampleQuery extends HKQuery {
    constructor(sampleType, predicate, limit, sort) {
        super(sampleType, predicate);
        this.limit = 0;
        this.limit = limit || 0;
        this.sort = sort ? sort.map((s) => new NSSortDescriptor(s)) : undefined;
    }
    toJS() {
        return Object.assign(super.toJS(), {
            limit: this.limit,
            sort: this.sort ? this.sort.map((s) => s.toJS()) : undefined,
        });
    }
}
//# sourceMappingURL=HKSampleQuery.js.map