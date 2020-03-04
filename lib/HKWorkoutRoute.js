import { CLLocation } from './CLLocation';
import { HKSeriesSample } from './HKSeriesSample';
export class HKWorkoutRoute extends HKSeriesSample {
    constructor(json) {
        super(json);
        this.locations = [];
        if (json) {
            this.locations = (json.locations || []).map((l) => new CLLocation(l));
            this.metadata = json.metadata;
        }
    }
    toJS() {
        return Object.assign(super.toJS(), {
            locations: this.locations.map((l) => l.toJS()),
            metadata: this.metadata,
        });
    }
}
//# sourceMappingURL=HKWorkoutRoute.js.map