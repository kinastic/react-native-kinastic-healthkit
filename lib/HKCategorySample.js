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
var HKCategorySample = /** @class */ (function (_super) {
    __extends(HKCategorySample, _super);
    function HKCategorySample(json) {
        var _this = _super.call(this, json) || this;
        _this.value = 0;
        if (json) {
            _this.value = json.value;
        }
        return _this;
    }
    HKCategorySample.prototype.toJS = function () {
        return Object.assign(_super.prototype.toJS.call(this), {
            value: this.value,
        });
    };
    HKCategorySample.build = function (value) {
        return new HKCategorySample({
            entityType: EntityType_1.EntityType.category,
            value: value,
        });
    };
    return HKCategorySample;
}(HKSample_1.default));
exports.default = HKCategorySample;
