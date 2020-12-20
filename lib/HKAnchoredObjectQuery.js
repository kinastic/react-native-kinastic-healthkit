import { HKQuery } from './HKQuery';
export class HKAnchoredObjectQuery extends HKQuery {
    constructor(sampleType, predicate, limit, anchor) {
        super(sampleType, predicate);
        this.limit = 0;
        this.limit = limit !== null && limit !== void 0 ? limit : 0;
        this.anchor = anchor;
    }
    toJS() {
        return Object.assign(super.toJS(), {
            limit: this.limit,
            anchor: this.anchor,
        });
    }
}
//# sourceMappingURL=HKAnchoredObjectQuery.js.map