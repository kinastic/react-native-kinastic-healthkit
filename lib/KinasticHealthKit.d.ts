import { HKSample } from './HKSample';
import { EmitterSubscription } from 'react-native';
import { HKWorkout } from './HKWorkout';
import { HKQuantitySample } from './HKQuantitySample';
import { HKCorrelation } from './HKCorrelation';
import { HKCategorySample } from './HKCategorySample';
import { HKSampleQuery } from './HKSampleQuery';
import { CLLocation } from './CLLocation';
import { HKCorrelationQuery } from './HKCorrelationQuery';
import { HKAnchoredObjectQuery } from './HKAnchoredObjectQuery';
import { HKAnchoredObjectQueryResult } from './HKAnchoredObjectQueryResult';
import { HKAuthorizationStatus } from './HKAuthorizationStatus';
import { HKAuthorizationRequestStatus } from './HKAuthorizationRequestStatus';
import { HKSampleType } from './HKSampleType';
import { NSPredicate } from './NSPredicate';
import { HKObjectType } from './HKObjectType';
import { HKUpdateFrequency } from './HKUpdateFrequency';
import { HKHeartbeatSeriesSample } from './HKHeartbeatSeriesSample';
export declare class KinasticHealthKit {
    private static emitter;
    static isAvailable(): Promise<boolean>;
    static requestAuthorization(readPermissions: string[], writePermissions?: string[]): Promise<any>;
    static authorizationStatus(permissions: string[]): Promise<HKAuthorizationStatus[]>;
    static getRequestStatusForAuthorization(readPermissions: string[], writePermissions?: string[]): Promise<HKAuthorizationRequestStatus>;
    static querySample(query: HKSampleQuery): Promise<HKSample[]>;
    static querySampleByWorkout(query: HKSampleQuery, workout: string | HKWorkout): Promise<HKSample[]>;
    static queryObserver(sampleType: HKSampleType, predicate?: NSPredicate): Promise<any>;
    /**
     * It is very important to call this method after the event emitter sent a "smapleTypeChanged" event.
     * @param taskId taskId provided from the event emitter
     */
    static completeTask(taskId: string): void;
    /**
     * Use only when cleaning up everything like on a logout
     */
    static completeAllTasks(): void;
    static enableBackgroundDelivery(objectType: HKObjectType, frequency: HKUpdateFrequency): Promise<any>;
    static disableBackgroundDelivery(objectType: HKObjectType): Promise<any>;
    static disableAllBackgroundDelivery(): Promise<any>;
    static queryCorrelation(query: HKCorrelationQuery): Promise<HKCorrelation[]>;
    static queryAnchored(query: HKAnchoredObjectQuery): Promise<HKAnchoredObjectQueryResult>;
    static queryWorkoutRoute(workoutUuid: string): Promise<CLLocation[]>;
    static queryHeartbeatSeries(query: HKSampleQuery): Promise<HKHeartbeatSeriesSample | undefined>;
    static save(samples: HKSample[]): Promise<any>;
    static saveQuantity(samples: HKQuantitySample[]): Promise<any>;
    static saveCategory(samples: HKCategorySample[]): Promise<any>;
    static saveCorrelation(samples: HKCorrelation[]): Promise<any>;
    static saveWorkout(samples: HKWorkout[]): Promise<any>;
    static subscribe(event: string, callback: (data: any) => void): EmitterSubscription;
}
