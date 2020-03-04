"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HKDeletedObject = /** @class */ (function () {
    function HKDeletedObject(json) {
        this.uuid = '';
        if (json) {
            this.uuid = json.uuid;
            this.metadata = json.metadata;
        }
    }
    return HKDeletedObject;
}());
exports.default = HKDeletedObject;
