import { HKWorkoutEventType } from './HKWorkoutEventType';
export class HKWorkoutEvent {
    constructor(json) {
        var _a;
        this.type = HKWorkoutEventType.pause;
        this.startDate = new Date();
        if (json) {
            this.type = (_a = json.type) !== null && _a !== void 0 ? _a : HKWorkoutEventType.pause;
            this.startDate = json.startDate ? new Date(json.startDate) : new Date();
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