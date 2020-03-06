export class NSSortDescriptor {
    constructor(json) {
        this.key = 'startDate';
        this.ascending = true;
        if (json) {
            this.key = json.key;
            this.ascending = json.ascending;
        }
    }
    toJS() {
        return {
            key: this.key,
            ascending: this.ascending,
        };
    }
    static build(sortKey = 'startDate', ascending = true) {
        return new NSSortDescriptor({
            key: sortKey,
            ascending
        });
    }
}
//# sourceMappingURL=NSSortDescriptor.js.map