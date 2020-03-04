"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HKSource = /** @class */ (function () {
    function HKSource(json) {
        this.name = '';
        this.bundleIdentifier = '';
        if (json) {
            this.name = json.name;
            this.bundleIdentifier = json.bundleIdentifier;
        }
    }
    HKSource.prototype.toJS = function () {
        return {
            name: this.name,
            bundleIdentifier: this.bundleIdentifier,
        };
    };
    return HKSource;
}());
exports.default = HKSource;
