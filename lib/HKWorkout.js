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
var HKWorkoutActivityType_1 = require("./HKWorkoutActivityType");
var HKSample_1 = require("./HKSample");
var HKWorkoutEvent_1 = require("./HKWorkoutEvent");
var HKMetadataKey_1 = require("./HKMetadataKey");
var EntityType_1 = require("./EntityType");
var HKSampleBuilder_1 = require("./HKSampleBuilder");
var HKWorkoutRoute_1 = require("./HKWorkoutRoute");
var HKWorkout = /** @class */ (function (_super) {
    __extends(HKWorkout, _super);
    function HKWorkout(json) {
        var _this = _super.call(this, json) || this;
        _this.activityType = HKWorkoutActivityType_1.HKWorkoutActivityType.americanFootball;
        _this.workoutEvents = [];
        _this.samples = [];
        if (json) {
            _this.activityType = json.activityType;
            _this.workoutEvents = (json.workoutEvents || []).map(function (e) { return new HKWorkoutEvent_1.HKWorkoutEvent(e); });
            _this.totalEnergyBurned = json.totalEnergyBurned;
            _this.totalDistance = json.totalDistance;
            _this.totalSwimmingStrokeCount = json.totalSwimmingStrokeCount;
            _this.totalFlightsClimbed = json.totalFlightsClimbed;
            _this.samples = json.samples ? json.samples.map(function (s) { return HKSampleBuilder_1.default.build(s); }) : [];
            _this.route = json.route ? new HKWorkoutRoute_1.default(json.route) : undefined;
        }
        return _this;
    }
    HKWorkout.prototype.toJS = function () {
        return Object.assign(_super.prototype.toJS.call(this), {
            activityType: this.activityType,
            workoutEvents: this.workoutEvents.map(function (e) { return e.toJS(); }),
            totalEnergyBurned: this.totalEnergyBurned,
            totalDistance: this.totalDistance,
            totalSwimmingStrokeCount: this.totalSwimmingStrokeCount,
            totalFlightsClimbed: this.totalFlightsClimbed,
            samples: this.samples.map(function (s) { return s.toJS(); }),
            route: this.route ? this.route.toJS() : undefined,
        });
    };
    HKWorkout.build = function (id, activityType, startDate, endDate, totalEnergyBurned, totalDistance, totalSwimmingStrokeCount, totalFlightsClimbed, workoutEvents, metadata) {
        var _a;
        var metadataValues = Object.assign({}, metadata, (_a = {
                HKExternalUUID: id
            },
            _a[HKMetadataKey_1.HKMetadataKey.HKMetadataKeySyncIdentifier] = id,
            _a[HKMetadataKey_1.HKMetadataKey.HKMetadataKeySyncVersion] = 1.0,
            _a));
        return new HKWorkout({
            entityType: EntityType_1.EntityType.workout,
            activityType: activityType,
            startDate: startDate,
            endDate: endDate,
            totalEnergyBurned: totalEnergyBurned,
            totalDistance: totalDistance,
            totalSwimmingStrokeCount: totalSwimmingStrokeCount,
            totalFlightsClimbed: totalFlightsClimbed,
            workoutEvents: workoutEvents,
            metadata: metadataValues,
        });
    };
    return HKWorkout;
}(HKSample_1.default));
exports.default = HKWorkout;
