import { CLLocation, CLLocationJson } from './CLLocation';
import { HKMetadata } from './HKMetadata';
import { HKSeriesSample, HKSeriesSampleJson } from './HKSeriesSample';

export type HKWorkoutRouteJson = HKSeriesSampleJson & {
  locations: CLLocationJson[];
  metadata?: HKMetadata;
}

export class HKWorkoutRoute extends HKSeriesSample {
  locations: CLLocation[] = [];
  metadata?: HKMetadata;

  constructor(json?: Partial<HKWorkoutRouteJson>) {
    super(json);

    if (json) {
      this.locations = (json.locations || []).map((l: any) => new CLLocation(l));
      this.metadata = json.metadata;
    }
  }

  toJS(): HKWorkoutRouteJson {
    return Object.assign(super.toJS(), {
      locations: this.locations.map((l: CLLocation) => l.toJS()),
      metadata: this.metadata,
    });
  }
}
