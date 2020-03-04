import { HKWorkoutEventType } from './HKWorkoutEventType';
import { HKMetadata } from './HKMetadata';

export class HKWorkoutEvent {
  type: HKWorkoutEventType = HKWorkoutEventType.pause;
  startDate: Date = new Date();
  endDate?: Date;
  metadata?: HKMetadata;

  constructor(json?: any) {
    if (json) {
      this.type = json.type;
      this.startDate = new Date(json.startDate);
      this.endDate = json.endDate ? new Date(json.endDate) : undefined;
      this.metadata = json.metadata;
    }
  }

  toJS(): any {
    return {
      type: this.type,
      startDate: this.startDate.toISOString(),
      endDate: this.endDate ? this.endDate.toISOString() : undefined,
      metadata: this.metadata,
    };
  }
}
