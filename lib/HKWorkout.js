import { HKWorkoutActivityType } from './HKWorkoutActivityType';
import { HKSample } from './HKSample';
import { HKWorkoutEvent } from './HKWorkoutEvent';
import { HKMetadataKey } from './HKMetadataKey';
import { EntityType } from './EntityType';
import { HKSampleBuilder } from './HKSampleBuilder';
import { HKWorkoutRoute } from './HKWorkoutRoute';
import { notUndefined } from './notUndefined';
export class HKWorkout extends HKSample {
    constructor(json) {
        var _a, _b;
        super(json);
        this.activityType = HKWorkoutActivityType.americanFootball;
        this.workoutEvents = [];
        this.samples = [];
        if (json) {
            this.activityType = (_a = json.activityType) !== null && _a !== void 0 ? _a : HKWorkoutActivityType.americanFootball;
            this.workoutEvents = (json.workoutEvents || []).map((e) => new HKWorkoutEvent(e));
            this.totalEnergyBurned = json.totalEnergyBurned;
            this.totalDistance = json.totalDistance;
            this.totalSwimmingStrokeCount = json.totalSwimmingStrokeCount;
            this.totalFlightsClimbed = json.totalFlightsClimbed;
            this.samples = ((_b = json.samples) !== null && _b !== void 0 ? _b : []).map((s) => HKSampleBuilder.build(s)).filter(notUndefined);
            this.route = json.route ? new HKWorkoutRoute(json.route) : undefined;
        }
    }
    toJS() {
        return Object.assign(super.toJS(), {
            activityType: this.activityType,
            workoutEvents: this.workoutEvents.map((e) => e.toJS()),
            totalEnergyBurned: this.totalEnergyBurned,
            totalDistance: this.totalDistance,
            totalSwimmingStrokeCount: this.totalSwimmingStrokeCount,
            totalFlightsClimbed: this.totalFlightsClimbed,
            samples: this.samples.map((s) => s.toJS()),
            route: this.route ? this.route.toJS() : undefined,
        });
    }
    static build(id, activityType, startDate, endDate, totalEnergyBurned, totalDistance, totalSwimmingStrokeCount, totalFlightsClimbed, workoutEvents, metadata) {
        const metadataValues = Object.assign({}, {
            HKExternalUUID: id,
            [HKMetadataKey.HKMetadataKeySyncIdentifier]: id,
            [HKMetadataKey.HKMetadataKeySyncVersion]: 1.0,
        }, metadata !== null && metadata !== void 0 ? metadata : {});
        return new HKWorkout({
            entityType: EntityType.workout,
            activityType,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            totalEnergyBurned,
            totalDistance,
            totalSwimmingStrokeCount,
            totalFlightsClimbed,
            workoutEvents: workoutEvents === null || workoutEvents === void 0 ? void 0 : workoutEvents.map((e) => e.toJS()),
            metadata: metadataValues,
        });
    }
}
//# sourceMappingURL=HKWorkout.js.map