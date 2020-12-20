export class HKDeletedObject {
    constructor(json) {
        var _a;
        this.uuid = '';
        if (json) {
            this.uuid = (_a = json.uuid) !== null && _a !== void 0 ? _a : '';
            this.metadata = json.metadata;
        }
    }
}
//# sourceMappingURL=HKDeletedObject.js.map