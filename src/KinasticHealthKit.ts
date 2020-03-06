import { HKSample } from './HKSample';
import { NativeModules, NativeEventEmitter, EmitterSubscription } from 'react-native';
import { HKWorkout } from './HKWorkout';
import { HKQuantitySample } from './HKQuantitySample';
import { HKCorrelation } from './HKCorrelation';
import { HKCategorySample } from './HKCategorySample';
import { HKSampleQuery } from './HKSampleQuery';
import { HKSampleBuilder } from './HKSampleBuilder';
import { HKDocumentSample } from './HKDocumentSample';
import { CLLocation } from './CLLocation';
import { HKCorrelationQuery } from './HKCorrelationQuery';
import { HKDocumentQuery } from './HKDocumentQuery';
import { HKAnchoredObjectQuery } from './HKAnchoredObjectQuery';
import { HKAnchoredObjectQueryResult } from './HKAnchoredObjectQueryResult';
import { HKAuthorizationStatus } from './HKAuthorizationStatus';
import { HKAuthorizationRequestStatus } from './HKAuthorizationRequestStatus';
import { HKSampleType } from './HKSampleType';
import { NSPredicate } from './NSPredicate';
import { HKObjectType } from './HKObjectType';
import { HKUpdateFrequency } from './HKUpdateFrequency';
import { HKHeartbeatSeriesSample } from './HKHeartbeatSeriesSample';

const { KinasticHealthkit: RNHealthkit } = NativeModules;

export class KinasticHealthKit {

  private static emitter = new NativeEventEmitter(RNHealthkit);

  static requestAuthorization(
    readPermissions: string[],
    writePermissions: string[] = [],
  ): Promise<any> {
    return RNHealthkit.requestAuthorization(readPermissions, writePermissions);
  }

  static authorizationStatus(permissions: string[]): Promise<HKAuthorizationStatus[]> {
    return RNHealthkit.authorizationStatus(permissions);
  }

  static getRequestStatusForAuthorization(readPermissions: string[], writePermissions: string[] = [],): Promise<HKAuthorizationRequestStatus> {
    return RNHealthkit.authorizationStatus(readPermissions, writePermissions);
  }

  static async querySample(query: HKSampleQuery): Promise<HKSample[]> {
    const result = await RNHealthkit.querySample(query.toJS());
    return (result || []).map((r: any) => HKSampleBuilder.build(r));
  }

  static async querySampleByWorkout(query: HKSampleQuery, workout: string | HKWorkout): Promise<HKSample[]> {
    const json = query.toJS();
    if (workout instanceof HKWorkout) {
      json.workoutUuid = workout.uuid;
    } else {
      json.workoutUuid = workout;
    }
    const result = await RNHealthkit.querySampleByWorkout(json);
    return (result || []).map((r: any) => HKSampleBuilder.build(r));
  }

  static async queryObserver(sampleType: HKSampleType, predicate?: NSPredicate): Promise<any> {
    return RNHealthkit.queryObserver(sampleType, predicate?.toJS());
  }

  /**
   * It is very important to call this method after the event emitter sent a "smapleTypeChanged" event.
   * @param taskId taskId provided from the event emitter
   */
  static completeTask(taskId: string) {
    RNHealthkit.completeTask(taskId);
  }

  static async enableBackgroundDelivery(objectType: HKObjectType, frequency: HKUpdateFrequency): Promise<any> {
    return RNHealthkit.enableBackgroundDelivery(objectType, frequency);
  }

  static async disableBackgroundDelivery(objectType: HKObjectType): Promise<any> {
    return RNHealthkit.disableBackgroundDelivery(objectType);
  }

  static async disableAllBackgroundDelivery(): Promise<any> {
    return RNHealthkit.disableAllBackgroundDelivery();
  }

  static async queryCorrelation(query: HKCorrelationQuery): Promise<HKCorrelation[]> {
    const result = await RNHealthkit.queryCorrelation(query.toJS());
    return (result || []).map((r: any) => new HKCorrelation(r));
  }

  static async queryDocument(query: HKDocumentQuery): Promise<HKDocumentSample[]> {
    const result = await RNHealthkit.queryDocument(query.toJS());
    return (result || []).map((r: any) => new HKDocumentSample(r));
  }

  static async queryAnchored(query: HKAnchoredObjectQuery): Promise<HKAnchoredObjectQueryResult> {
    const result = await RNHealthkit.queryAnchored(query.toJS());
    return new HKAnchoredObjectQueryResult(result);
  }

  static async queryWorkoutRoute(workoutUuid: string): Promise<CLLocation[]> {
    const result = await RNHealthkit.queryWorkoutRoute({ uuid: workoutUuid });
    return (result || []).map((r: any) => new CLLocation(r));
  }

  static async queryHeartbeatSeries(query: HKSampleQuery): Promise<HKHeartbeatSeriesSample | undefined> {
    const result = await RNHealthkit.queryHeartbeatSeries(query.toJS());
    return result ? new HKHeartbeatSeriesSample(result) : undefined;
  }

  static save(samples: HKSample[]): Promise<any> {
    const json = samples.map((s: HKSample) => s.toJS());
    return RNHealthkit.save(json);
  }

  static saveQuantity(samples: HKQuantitySample[]): Promise<any> {
    const json = samples.map((s: HKSample) => s.toJS());
    return RNHealthkit.saveQuantity(json);
  }

  static saveCategory(samples: HKCategorySample[]): Promise<any> {
    const json = samples.map((s: HKCategorySample) => s.toJS());
    return RNHealthkit.saveCategory(json);
  }

  static saveCorrelation(samples: HKCorrelation[]): Promise<any> {
    const json = samples.map((s: HKCorrelation) => s.toJS());
    return RNHealthkit.saveCorrelation(json);
  }

  static saveWorkout(samples: HKWorkout[]): Promise<any> {
    const json = samples.map((s: HKWorkout) => s.toJS());
    return RNHealthkit.saveWorkout(json);
  }

  static subscribe(event: string, callback: (data: any) => void): EmitterSubscription {
    return this.emitter.addListener(event, callback);
  }
}
