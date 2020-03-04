import { HKSample } from './HKSample';
import { HKWorkout } from './HKWorkout';
import { HKQuantitySample } from './HKQuantitySample';
import { HKCorrelation } from './HKCorrelation';
import { HKCategorySample } from './HKCategorySample';
import { HKSampleQuery } from './HKSampleQuery';
import { HKDocumentSample } from './HKDocumentSample';
import { CLLocation } from './CLLocation';
import { HKCorrelationQuery } from './HKCorrelationQuery';
import { HKDocumentQuery } from './HKDocumentQuery';
import { HKAnchoredObjectQuery } from './HKAnchoredObjectQuery';
import { HKAnchoredObjectQueryResult } from './HKAnchoredObjectQueryResult';
export declare class KinasticHealthKit {
    static requestAuthorization(readPermissions: string[], writePermissions: string[]): Promise<any>;
    static querySample(query: HKSampleQuery): Promise<HKSample[]>;
    static queryCorrelation(query: HKCorrelationQuery): Promise<HKCorrelation[]>;
    static queryDocument(query: HKDocumentQuery): Promise<HKDocumentSample[]>;
    static queryAnchored(query: HKAnchoredObjectQuery): Promise<HKAnchoredObjectQueryResult>;
    static queryWorkoutRoute(workoutUuid: string): Promise<CLLocation[]>;
    static save(samples: HKSample[]): Promise<any>;
    static saveQuantity(samples: HKQuantitySample[]): Promise<any>;
    static saveCategory(samples: HKCategorySample[]): Promise<any>;
    static saveCorrelation(samples: HKCorrelation[]): Promise<any>;
    static saveWorkout(samples: HKWorkout[]): Promise<any>;
}
