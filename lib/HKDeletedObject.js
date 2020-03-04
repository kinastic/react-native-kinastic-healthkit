export class HKDeletedObject {
    constructor(json) {
        this.uuid = '';
        if (json) {
            this.uuid = json.uuid;
            this.metadata = json.metadata;
        }
    }
}
//# sourceMappingURL=HKDeletedObject.js.map