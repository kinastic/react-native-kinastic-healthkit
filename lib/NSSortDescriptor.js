export class NSSortDescriptor {
    constructor(json) {
        var _a, _b;
        this.key = 'startDate';
        this.ascending = true;
        if (json) {
            this.key = (_a = json.key) !== null && _a !== void 0 ? _a : 'startDate';
            this.ascending = (_b = json.ascending) !== null && _b !== void 0 ? _b : true;
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