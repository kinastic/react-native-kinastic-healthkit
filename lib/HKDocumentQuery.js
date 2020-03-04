import { HKQuery } from './HKQuery';
import { NSSortDescriptor } from './NSSortDescriptor';
export class HKDocumentQuery extends HKQuery {
    constructor(sampleType, predicate, limit, sort, includeDocumentData) {
        super(sampleType, predicate);
        this.limit = 0;
        this.includeDocumentData = false;
        this.limit = limit || 0;
        this.sort = sort ? sort.map((s) => new NSSortDescriptor(s)) : undefined;
        this.includeDocumentData = includeDocumentData || false;
    }
}
//# sourceMappingURL=HKDocumentQuery.js.map