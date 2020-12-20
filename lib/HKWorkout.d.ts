import { HKWorkoutActivityType } from './HKWorkoutActivityType';
import { HKSample, HKSampleJson } from './HKSample';
import { HKWorkoutEvent, HKWorkoutEventJson } from './HKWorkoutEvent';
import { HKMetadata } from './HKMetadata';
import { HKWorkoutRoute, HKWorkoutRouteJson } from './HKWorkoutRoute';
export declare type HKWorkoutJson = HKSampleJson & {
    activityType: HKWorkoutActivityType;
    workoutEvents: HKWorkoutEventJson[];
    totalEnergyBurned?: number;
    totalDistance?: number;
    totalSwimmingStrokeCount?: number;
    totalFlightsClimbed?: number;
    route?: HKWorkoutRouteJson;
    samples: HKSampleJson[];
};
export declare class HKWorkout extends HKSample {
    activityType: HKWorkoutActivityType;
    workoutEvents: HKWorkoutEvent[];
    totalEnergyBurned?: number;
    totalDistance?: number;
    totalSwimmingStrokeCount?: number;
    totalFlightsClimbed?: number;
    route?: HKWorkoutRoute;
    samples: HKSample[];
    constructor(json?: Partial<HKWorkoutJson>);
    toJS(): HKWorkoutJson;
    static build(id: string, activityType: HKWorkoutActivityType, startDate: Date, endDate: Date, totalEnergyBurned: number, totalDistance?: number, totalSwimmingStrokeCount?: number, totalFlightsClimbed?: number, workoutEvents?: HKWorkoutEvent[], metadata?: HKMetadata): HKWorkout;
}
