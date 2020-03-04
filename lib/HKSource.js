export class HKSource {
    constructor(json) {
        this.name = '';
        this.bundleIdentifier = '';
        if (json) {
            this.name = json.name;
            this.bundleIdentifier = json.bundleIdentifier;
        }
    }
    toJS() {
        return {
            name: this.name,
            bundleIdentifier: this.bundleIdentifier,
        };
    }
}
//# sourceMappingURL=HKSource.js.map