import CLLocation from './CLLocation';
import HKMetadata from './HKMetadata';
import HKSeriesSample from './HKSeriesSample';

export default class HKWorkoutRoute extends HKSeriesSample {
  locations: CLLocation[] = [];
  metadata?: HKMetadata;

  constructor(json?: any) {
    super(json);

    if (json) {
      this.locations = (json.locations || []).map((l: any) => new CLLocation(l));
      this.metadata = json.metadata;
    }
  }

  toJS(): any {
    return Object.assign(super.toJS(), {
      locations: this.locations.map((l: CLLocation) => l.toJS()),
      metadata: this.metadata,
    });
  }
}
