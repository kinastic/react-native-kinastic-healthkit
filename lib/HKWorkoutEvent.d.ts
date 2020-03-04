import HKWorkoutEventType from './HKWorkoutEventType';
import HKMetadata from './HKMetadata';
export declare class HKWorkoutEvent {
    type: HKWorkoutEventType;
    startDate: Date;
    endDate?: Date;
    metadata?: HKMetadata;
    constructor(json?: any);
    toJS(): any;
}
