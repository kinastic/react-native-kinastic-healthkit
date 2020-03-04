import { CLLocation } from './CLLocation';
import { HKMetadata } from './HKMetadata';
import { HKSeriesSample } from './HKSeriesSample';
export declare class HKWorkoutRoute extends HKSeriesSample {
    locations: CLLocation[];
    metadata?: HKMetadata;
    constructor(json?: any);
    toJS(): any;
}
