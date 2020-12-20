import { CLLocation, CLLocationJson } from './CLLocation';
import { HKMetadata } from './HKMetadata';
import { HKSeriesSample, HKSeriesSampleJson } from './HKSeriesSample';
export declare type HKWorkoutRouteJson = HKSeriesSampleJson & {
    locations: CLLocationJson[];
    metadata?: HKMetadata;
};
export declare class HKWorkoutRoute extends HKSeriesSample {
    locations: CLLocation[];
    metadata?: HKMetadata;
    constructor(json?: Partial<HKWorkoutRouteJson>);
    toJS(): HKWorkoutRouteJson;
}
