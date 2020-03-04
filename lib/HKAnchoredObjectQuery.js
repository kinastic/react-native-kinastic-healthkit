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
var HKAnchoredObjectQuery = /** @class */ (function (_super) {
    __extends(HKAnchoredObjectQuery, _super);
    function HKAnchoredObjectQuery(sampleType, predicate, limit, anchor) {
        var _this = _super.call(this, sampleType, predicate) || this;
        _this.limit = 0;
        _this.limit = limit || 0;
        _this.anchor = anchor;
        return _this;
    }
    HKAnchoredObjectQuery.prototype.toJS = function () {
        return {
            limit: this.limit,
            anchor: this.anchor,
        };
    };
    return HKAnchoredObjectQuery;
}(HKQuery_1.default));
exports.default = HKAnchoredObjectQuery;
