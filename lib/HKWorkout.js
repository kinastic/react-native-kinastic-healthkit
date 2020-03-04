import { HKWorkoutActivityType } from './HKWorkoutActivityType';
import { HKSample } from './HKSample';
import { HKWorkoutEvent } from './HKWorkoutEvent';
import { HKMetadataKey } from './HKMetadataKey';
import { EntityType } from './EntityType';
import { HKSampleBuilder } from './HKSampleBuilder';
import { HKWorkoutRoute } from './HKWorkoutRoute';
export class HKWorkout extends HKSample {
    constructor(json) {
        super(json);
        this.activityType = HKWorkoutActivityType.americanFootball;
        this.workoutEvents = [];
        this.samples = [];
        if (json) {
            this.activityType = json.activityType;
            this.workoutEvents = (json.workoutEvents || []).map((e) => new HKWorkoutEvent(e));
            this.totalEnergyBurned = json.totalEnergyBurned;
            this.totalDistance = json.totalDistance;
            this.totalSwimmingStrokeCount = json.totalSwimmingStrokeCount;
            this.totalFlightsClimbed = json.totalFlightsClimbed;
            this.samples = json.samples ? json.samples.map((s) => HKSampleBuilder.build(s)) : [];
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
        const metadataValues = Object.assign({}, metadata, {
            HKExternalUUID: id,
            [HKMetadataKey.HKMetadataKeySyncIdentifier]: id,
            [HKMetadataKey.HKMetadataKeySyncVersion]: 1.0,
        });
        return new HKWorkout({
            entityType: EntityType.workout,
            activityType,
            startDate,
            endDate,
            totalEnergyBurned,
            totalDistance,
            totalSwimmingStrokeCount,
            totalFlightsClimbed,
            workoutEvents,
            metadata: metadataValues,
        });
    }
}
//# sourceMappingURL=HKWorkout.js.map