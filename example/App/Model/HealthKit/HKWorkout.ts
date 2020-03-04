import { HKWorkoutActivityType } from './HKWorkoutActivityType';
import HKSample from './HKSample';
import { HKWorkoutEvent } from './HKWorkoutEvent';
import HKMetadata from './HKMetadata';
import { HKMetadataKey } from './HKMetadataKey';
import { EntityType } from './EntityType';
import HKSampleBuilder from './HKSampleBuilder';
import HKWorkoutRoute from './HKWorkoutRoute';

export class HKWorkout extends HKSample {
  activityType: HKWorkoutActivityType = HKWorkoutActivityType.americanFootball;
  workoutEvents: HKWorkoutEvent[] = [];
  totalEnergyBurned?: number;
  totalDistance?: number;

  // iOS 10.0
  totalSwimmingStrokeCount?: number;

  // iOS 11.0
  totalFlightsClimbed?: number;

  route?: HKWorkoutRoute;

  samples: HKSample[] = [];

  constructor(json?: any) {
    super(json);

    if (json) {
      this.activityType = json.activityType;
      this.workoutEvents = (json.workoutEvents || []).map((e: any) => new HKWorkoutEvent(e));
      this.totalEnergyBurned = json.totalEnergyBurned;
      this.totalDistance = json.totalDistance;
      this.totalSwimmingStrokeCount = json.totalSwimmingStrokeCount;
      this.totalFlightsClimbed = json.totalFlightsClimbed;
      this.samples = json.samples ? json.samples.map((s: any) => HKSampleBuilder.build(s)) : [];
      this.route = json.route ? new HKWorkoutRoute(json.route) : undefined;
    }
  }

  toJS(): any {
    return Object.assign(super.toJS(), {
      activityType: this.activityType,
      workoutEvents: this.workoutEvents.map((e: HKWorkoutEvent) => e.toJS()),
      totalEnergyBurned: this.totalEnergyBurned,
      totalDistance: this.totalDistance,
      totalSwimmingStrokeCount: this.totalSwimmingStrokeCount,
      totalFlightsClimbed: this.totalFlightsClimbed,
      samples: this.samples.map((s: HKSample) => s.toJS()),
      route: this.route ? this.route.toJS() : undefined,
    });
  }

  static build(
    id: string,
    activityType: HKWorkoutActivityType,
    startDate: Date,
    endDate: Date,
    totalEnergyBurned: number,
    totalDistance?: number,
    totalSwimmingStrokeCount?: number,
    totalFlightsClimbed?: number,
    workoutEvents?: HKWorkoutEvent[],
    metadata?: HKMetadata,
  ): HKWorkout {
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
