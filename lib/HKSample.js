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
var HKObject_1 = require("./HKObject");
var EntityType_1 = require("./EntityType");
var HKSample = /** @class */ (function (_super) {
    __extends(HKSample, _super);
    function HKSample(json) {
        var _this = _super.call(this, json) || this;
        // not from healthkit. Used to determine the right class.
        _this.entityType = EntityType_1.EntityType.quantity;
        _this.startDate = new Date();
        _this.endDate = new Date();
        if (json) {
            _this.sampleType = json.sampleType;
            _this.startDate = new Date(json.startDate);
            _this.endDate = new Date(json.endDate);
        }
        return _this;
    }
    HKSample.prototype.toJS = function () {
        return Object.assign(_super.prototype.toJS.call(this), {
            entityType: this.entityType,
            sampleType: this.sampleType,
            startDate: this.startDate.toISOString(),
            endDate: this.endDate.toISOString(),
        });
    };
    return HKSample;
}(HKObject_1.default));
exports.default = HKSample;
