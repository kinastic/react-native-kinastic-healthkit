"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HKSample_1 = require("./HKSample");
var EntityType_1 = require("./EntityType");
var HKMetadataKey_1 = require("./HKMetadataKey");
var HKQuantitySample = /** @class */ (function (_super) {
    __extends(HKQuantitySample, _super);
    function HKQuantitySample(json) {
        var _this = _super.call(this, json) || this;
        _this.value = 0;
        if (json) {
            _this.value = json.value;
            _this.unit = json.unit;
        }
        return _this;
    }
    HKQuantitySample.prototype.toJS = function () {
        return Object.assign(_super.prototype.toJS.call(this), {
            value: this.value,
            unit: this.unit,
        });
    };
    HKQuantitySample.build = function (id, sampleType, startDate, endDate, value, metadata) {
        var _a;
        var metadataValues = Object.assign({}, metadata, (_a = {
                HKExternalUUID: id
            },
            _a[HKMetadataKey_1.HKMetadataKey.HKMetadataKeySyncIdentifier] = id,
            _a[HKMetadataKey_1.HKMetadataKey.HKMetadataKeySyncVersion] = 1.0,
            _a));
        return new HKQuantitySample({
            entityType: EntityType_1.EntityType.quantity,
            sampleType: sampleType,
            startDate: startDate,
            endDate: endDate,
            value: value,
            metadata: metadataValues,
        });
    };
    return HKQuantitySample;
}(HKSample_1.default));
exports.default = HKQuantitySample;
