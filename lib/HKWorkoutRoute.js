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
var CLLocation_1 = require("./CLLocation");
var HKSeriesSample_1 = require("./HKSeriesSample");
var HKWorkoutRoute = /** @class */ (function (_super) {
    __extends(HKWorkoutRoute, _super);
    function HKWorkoutRoute(json) {
        var _this = _super.call(this, json) || this;
        _this.locations = [];
        if (json) {
            _this.locations = (json.locations || []).map(function (l) { return new CLLocation_1.default(l); });
            _this.metadata = json.metadata;
        }
        return _this;
    }
    HKWorkoutRoute.prototype.toJS = function () {
        return Object.assign(_super.prototype.toJS.call(this), {
            locations: this.locations.map(function (l) { return l.toJS(); }),
            metadata: this.metadata,
        });
    };
    return HKWorkoutRoute;
}(HKSeriesSample_1.default));
exports.default = HKWorkoutRoute;
