"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HKSource_1 = require("./HKSource");
var HKSourceRevision_1 = require("./HKSourceRevision");
var HKDevice_1 = require("./HKDevice");
var HKObject = /** @class */ (function () {
    function HKObject(json) {
        this.uuid = '';
        /**
         * @deprecated iOS 9.0
         */
        this.source = new HKSource_1.default();
        if (json) {
            this.uuid = json.uuid;
            this.source = json.source ? new HKSource_1.default(json.source) : undefined;
            this.sourceRevision = json.sourceRevision ? new HKSourceRevision_1.default(json.sourceRevision) : undefined;
            this.device = json.device ? new HKDevice_1.default(json.device) : undefined;
            this.metadata = json.metadata;
        }
    }
    HKObject.prototype.toJS = function () {
        return {
            uuid: this.uuid,
            source: this.source ? this.source.toJS() : undefined,
            sourceRevision: this.sourceRevision ? this.sourceRevision.toJS() : undefined,
            device: this.device ? this.device.toJS() : undefined,
            metadata: this.metadata,
        };
    };
    return HKObject;
}());
exports.default = HKObject;
