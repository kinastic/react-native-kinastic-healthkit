import { HKWorkoutEventType } from './HKWorkoutEventType';
import { HKMetadata } from './HKMetadata';
export declare type HKWorkoutEventJson = {
    type: HKWorkoutEventType;
    startDate: string;
    endDate?: string;
    metadata?: HKMetadata;
};
export declare class HKWorkoutEvent {
    type: HKWorkoutEventType;
    startDate: Date;
    endDate?: Date;
    metadata?: HKMetadata;
    constructor(json?: Partial<HKWorkoutEventJson>);
    toJS(): HKWorkoutEventJson;
}
