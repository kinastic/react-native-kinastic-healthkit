import { HKWorkoutActivityType } from './HKWorkoutActivityType';
import { HKSample, HKSampleJson } from './HKSample';
import { HKWorkoutEvent, HKWorkoutEventJson } from './HKWorkoutEvent';
import { HKMetadata } from './HKMetadata';
import { HKMetadataKey } from './HKMetadataKey';
import { EntityType } from './EntityType';
import { HKSampleBuilder } from './HKSampleBuilder';
import { HKWorkoutRoute, HKWorkoutRouteJson } from './HKWorkoutRoute';
import { notUndefined } from './notUndefined';

export type HKWorkoutJson = HKSampleJson & {
  activityType: HKWorkoutActivityType;
  workoutEvents: HKWorkoutEventJson[];
  totalEnergyBurned?: number;
  totalDistance?: number;
  totalSwimmingStrokeCount?: number;
  totalFlightsClimbed?: number;
  route?: HKWorkoutRouteJson;
  samples: HKSampleJson[];
}

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

  constructor(json?: Partial<HKWorkoutJson>) {
    super(json);

    if (json) {
      this.activityType = json.activityType ?? HKWorkoutActivityType.americanFootball;
      this.workoutEvents = (json.workoutEvents || []).map((e: any) => new HKWorkoutEvent(e));
      this.totalEnergyBurned = json.totalEnergyBurned;
      this.totalDistance = json.totalDistance;
      this.totalSwimmingStrokeCount = json.totalSwimmingStrokeCount;
      this.totalFlightsClimbed = json.totalFlightsClimbed;
      this.samples = (json.samples ?? []).map((s: any) => HKSampleBuilder.build(s)).filter(notUndefined);
      this.route = json.route ? new HKWorkoutRoute(json.route) : undefined;
    }
  }

  toJS(): HKWorkoutJson {
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
    const metadataValues = Object.assign({}, {
      HKExternalUUID: id,
      [HKMetadataKey.HKMetadataKeySyncIdentifier]: id,
      [HKMetadataKey.HKMetadataKeySyncVersion]: 1.0,
    }, metadata ?? {});
    return new HKWorkout({
      entityType: EntityType.workout,
      activityType,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      totalEnergyBurned,
      totalDistance,
      totalSwimmingStrokeCount,
      totalFlightsClimbed,
      workoutEvents: workoutEvents?.map((e) => e.toJS()),
      metadata: metadataValues,
    });
  }
}
