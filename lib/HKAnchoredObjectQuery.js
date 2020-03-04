import { HKQuery } from './HKQuery';
export class HKAnchoredObjectQuery extends HKQuery {
    constructor(sampleType, predicate, limit, anchor) {
        super(sampleType, predicate);
        this.limit = 0;
        this.limit = limit || 0;
        this.anchor = anchor;
    }
    toJS() {
        return {
            limit: this.limit,
            anchor: this.anchor,
        };
    }
}
//# sourceMappingURL=HKAnchoredObjectQuery.js.map