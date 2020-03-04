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
var HKSampleBuilder_1 = require("./HKSampleBuilder");
var HKMetadataKey_1 = require("./HKMetadataKey");
var EntityType_1 = require("./EntityType");
var HKCorrelation = /** @class */ (function (_super) {
    __extends(HKCorrelation, _super);
    function HKCorrelation(json) {
        var _this = _super.call(this, json) || this;
        _this.objects = [];
        if (json) {
            _this.objects = (json.objects || []).map(function (o) { return HKSampleBuilder_1.default.build(o); });
        }
        return _this;
    }
    HKCorrelation.prototype.toJS = function () {
        return Object.assign(_super.prototype.toJS.call(this), {
            objects: this.objects.map(function (o) { return o.toJS(); }),
        });
    };
    HKCorrelation.build = function (id, sampleType, startDate, endDate, objects, metadata) {
        var _a;
        var metadataValues = Object.assign({}, metadata, (_a = {
                HKExternalUUID: id
            },
            _a[HKMetadataKey_1.HKMetadataKey.HKMetadataKeySyncIdentifier] = id,
            _a[HKMetadataKey_1.HKMetadataKey.HKMetadataKeySyncVersion] = 1.0,
            _a));
        return new HKCorrelation({
            entityType: EntityType_1.EntityType.correlation,
            sampleType: sampleType,
            startDate: startDate,
            endDate: endDate,
            objects: objects,
            metadata: metadataValues,
        });
    };
    return HKCorrelation;
}(HKSample_1.default));
exports.default = HKCorrelation;
