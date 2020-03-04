import { HKWorkoutEventType } from './HKWorkoutEventType';
export class HKWorkoutEvent {
    constructor(json) {
        this.type = HKWorkoutEventType.pause;
        this.startDate = new Date();
        if (json) {
            this.type = json.type;
            this.startDate = new Date(json.startDate);
            this.endDate = json.endDate ? new Date(json.endDate) : undefined;
            this.metadata = json.metadata;
        }
    }
    toJS() {
        return {
            type: this.type,
            startDate: this.startDate.toISOString(),
            endDate: this.endDate ? this.endDate.toISOString() : undefined,
            metadata: this.metadata,
        };
    }
}
//# sourceMappingURL=HKWorkoutEvent.js.map