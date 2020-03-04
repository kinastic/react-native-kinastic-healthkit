import { HKWorkoutActivityType } from './HKWorkoutActivityType';
import { HKSample } from './HKSample';
import { HKWorkoutEvent } from './HKWorkoutEvent';
import { HKMetadata } from './HKMetadata';
import { HKWorkoutRoute } from './HKWorkoutRoute';
export declare class HKWorkout extends HKSample {
    activityType: HKWorkoutActivityType;
    workoutEvents: HKWorkoutEvent[];
    totalEnergyBurned?: number;
    totalDistance?: number;
    totalSwimmingStrokeCount?: number;
    totalFlightsClimbed?: number;
    route?: HKWorkoutRoute;
    samples: HKSample[];
    constructor(json?: any);
    toJS(): any;
    static build(id: string, activityType: HKWorkoutActivityType, startDate: Date, endDate: Date, totalEnergyBurned: number, totalDistance?: number, totalSwimmingStrokeCount?: number, totalFlightsClimbed?: number, workoutEvents?: HKWorkoutEvent[], metadata?: HKMetadata): HKWorkout;
}
