"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HKDeletedObject_1 = require("./HKDeletedObject");
var HKSampleBuilder_1 = require("./HKSampleBuilder");
var HKAnchoredObjectQueryResult = /** @class */ (function () {
    function HKAnchoredObjectQueryResult(json) {
        this.samples = [];
        this.deleted = [];
        if (json) {
            this.samples = (json.samples || []).map(function (s) { return HKSampleBuilder_1.default.build(s); });
            this.deleted = (json.deleted || []).map(function (d) { return new HKDeletedObject_1.default(d); });
            this.anchor = json.anchor;
        }
    }
    return HKAnchoredObjectQueryResult;
}());
exports.default = HKAnchoredObjectQueryResult;
