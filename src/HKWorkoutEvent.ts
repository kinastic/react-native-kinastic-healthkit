import { HKWorkoutEventType } from './HKWorkoutEventType';
import { HKMetadata } from './HKMetadata';

export type HKWorkoutEventJson = {
  type: HKWorkoutEventType;
  startDate: string;
  endDate?: string;
  metadata?: HKMetadata;
}

export class HKWorkoutEvent {
  type: HKWorkoutEventType = HKWorkoutEventType.pause;
  startDate: Date = new Date();
  endDate?: Date;
  metadata?: HKMetadata;

  constructor(json?: Partial<HKWorkoutEventJson>) {
    if (json) {
      this.type = json.type ?? HKWorkoutEventType.pause;
      this.startDate = json.startDate ? new Date(json.startDate) : new Date();
      this.endDate = json.endDate ? new Date(json.endDate) : undefined;
      this.metadata = json.metadata;
    }
  }

  toJS(): HKWorkoutEventJson {
    return {
      type: this.type,
      startDate: this.startDate.toISOString(),
      endDate: this.endDate ? this.endDate.toISOString() : undefined,
      metadata: this.metadata,
    };
  }
}
