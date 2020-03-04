"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HKWorkoutEventType_1 = require("./HKWorkoutEventType");
var HKWorkoutEvent = /** @class */ (function () {
    function HKWorkoutEvent(json) {
        this.type = HKWorkoutEventType_1.default.pause;
        this.startDate = new Date();
        if (json) {
            this.type = json.type;
            this.startDate = new Date(json.startDate);
            this.endDate = json.endDate ? new Date(json.endDate) : undefined;
            this.metadata = json.metadata;
        }
    }
    HKWorkoutEvent.prototype.toJS = function () {
        return {
            type: this.type,
            startDate: this.startDate.toISOString(),
            endDate: this.endDate ? this.endDate.toISOString() : undefined,
            metadata: this.metadata,
        };
    };
    return HKWorkoutEvent;
}());
exports.HKWorkoutEvent = HKWorkoutEvent;
