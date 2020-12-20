export class HKSource {
    constructor(json) {
        var _a, _b;
        this.name = '';
        this.bundleIdentifier = '';
        if (json) {
            this.name = (_a = json.name) !== null && _a !== void 0 ? _a : '';
            this.bundleIdentifier = (_b = json.bundleIdentifier) !== null && _b !== void 0 ? _b : '';
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