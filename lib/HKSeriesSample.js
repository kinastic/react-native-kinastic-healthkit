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
var HKSeriesSample = /** @class */ (function (_super) {
    __extends(HKSeriesSample, _super);
    function HKSeriesSample(json) {
        var _this = _super.call(this, json) || this;
        _this.count = 0;
        if (json) {
            _this.count = json.count || 0;
        }
        return _this;
    }
    HKSeriesSample.prototype.toJS = function () {
        return Object.assign(_super.prototype.toJS.call(this), {
            count: this.count,
        });
    };
    return HKSeriesSample;
}(HKSample_1.default));
exports.default = HKSeriesSample;
