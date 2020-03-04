"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NSSortDescriptor = /** @class */ (function () {
    function NSSortDescriptor(json) {
        this.key = 'startDate';
        this.ascending = true;
        if (json) {
            this.key = json.key;
            this.ascending = json.ascending;
        }
    }
    NSSortDescriptor.prototype.toJS = function () {
        return {
            key: this.key,
            ascending: this.ascending,
        };
    };
    return NSSortDescriptor;
}());
exports.default = NSSortDescriptor;
