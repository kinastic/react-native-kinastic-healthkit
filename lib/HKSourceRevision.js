"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HKSource_1 = require("./HKSource");
var HKSourceRevision = /** @class */ (function () {
    function HKSourceRevision(json) {
        this.source = new HKSource_1.default();
        this.operatingSystemVersion = '';
        if (json) {
            this.source = new HKSource_1.default(json.source);
            this.version = json.version;
            this.productType = json.productType;
            this.operatingSystemVersion = json.operatingSystemVersion;
        }
    }
    HKSourceRevision.prototype.toJS = function () {
        return {
            source: this.source.toJS(),
            version: this.version,
            productType: this.productType,
            operatingSystemVersion: this.operatingSystemVersion,
        };
    };
    return HKSourceRevision;
}());
exports.default = HKSourceRevision;
