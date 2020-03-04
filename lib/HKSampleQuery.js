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
var HKQuery_1 = require("./HKQuery");
var NSSortDescriptor_1 = require("./NSSortDescriptor");
var HKSampleQuery = /** @class */ (function (_super) {
    __extends(HKSampleQuery, _super);
    function HKSampleQuery(sampleType, predicate, limit, sort) {
        var _this = _super.call(this, sampleType, predicate) || this;
        _this.limit = 0;
        _this.limit = limit || 0;
        _this.sort = sort ? sort.map(function (s) { return new NSSortDescriptor_1.default(s); }) : undefined;
        return _this;
    }
    HKSampleQuery.prototype.toJS = function () {
        return Object.assign(_super.prototype.toJS.call(this), {
            limit: this.limit,
            sort: this.sort ? this.sort.map(function (s) { return s.toJS(); }) : undefined,
        });
    };
    return HKSampleQuery;
}(HKQuery_1.default));
exports.default = HKSampleQuery;
