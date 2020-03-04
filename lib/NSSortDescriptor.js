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
}
//# sourceMappingURL=NSSortDescriptor.js.map