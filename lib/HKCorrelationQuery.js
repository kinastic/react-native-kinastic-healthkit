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
var NSPredicate_1 = require("./NSPredicate");
var HKCorrelationQuery = /** @class */ (function (_super) {
    __extends(HKCorrelationQuery, _super);
    function HKCorrelationQuery(sampleType, predicate, samplePredicates) {
        var _this = _super.call(this, sampleType, predicate) || this;
        _this.samplePredicates = samplePredicates
            ? Object.keys(samplePredicates).reduce(function (prev, curr) {
                var entry = samplePredicates[curr];
                if (entry) {
                    prev[curr] = new NSPredicate_1.default(entry);
                }
                return prev;
            }, {})
            : undefined;
        return _this;
    }
    HKCorrelationQuery.prototype.toJS = function () {
        var samplePredicates = this.samplePredicates;
        return Object.assign(_super.prototype.toJS.call(this), {
            samplePredicates: samplePredicates
                ? Object.keys(samplePredicates).reduce(function (prev, curr) {
                    var entry = samplePredicates[curr];
                    if (entry) {
                        prev[curr] = entry.toJS();
                    }
                    return prev;
                }, {})
                : undefined,
        });
    };
    return HKCorrelationQuery;
}(HKQuery_1.default));
exports.default = HKCorrelationQuery;
