import { HKSample } from './HKSample';
import { NativeModules, NativeEventEmitter, EmitterSubscription, Platform } from 'react-native';
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
    if (Platform.OS === 'ios') {
      return RNHealthkit.requestAuthorization(readPermissions, writePermissions);
    }
    return Promise.reject('ios only');
  }

  static authorizationStatus(permissions: string[]): Promise<HKAuthorizationStatus[]> {
    if (Platform.OS === 'ios') {
      return RNHealthkit.authorizationStatus(permissions); 
    }
    return Promise.reject('ios only');
  }

  static getRequestStatusForAuthorization(readPermissions: string[], writePermissions: string[] = [],): Promise<HKAuthorizationRequestStatus> {
    if (Platform.OS === 'ios') {
      return RNHealthkit.authorizationStatus(readPermissions, writePermissions);
    }
    return Promise.reject('ios only');
  }

  static async querySample(query: HKSampleQuery): Promise<HKSample[]> {
    if (Platform.OS === 'ios') {
      const result = await RNHealthkit.querySample(query.toJS());
      return (result || []).map((r: any) => HKSampleBuilder.build(r));
    }
    return Promise.reject('ios only')
  }

  static async querySampleByWorkout(query: HKSampleQuery, workout: string | HKWorkout): Promise<HKSample[]> {
    if (Platform.OS === 'ios') {
      const json = query.toJS();
      if (workout instanceof HKWorkout) {
        json.workoutUuid = workout.uuid;
      } else {
        json.workoutUuid = workout;
      }
      const result = await RNHealthkit.querySampleByWorkout(json);
      return (result || []).map((r: any) => HKSampleBuilder.build(r));
    }
    return Promise.reject('ios only');
  }

  static async queryObserver(sampleType: HKSampleType, predicate?: NSPredicate): Promise<any> {
    if (Platform.OS === 'ios') {
      return RNHealthkit.queryObserver(sampleType, predicate?.toJS());
    }
    return Promise.reject('ios only');
  }

  /**
   * It is very important to call this method after the event emitter sent a "smapleTypeChanged" event.
   * @param taskId taskId provided from the event emitter
   */
  static completeTask(taskId: string) {
    if (Platform.OS === 'ios') {
      RNHealthkit.completeTask(taskId);
    }
  }

  /**
   * Use only when cleaning up everything like on a logout
   */
  static completeAllTasks() {
    if (Platform.OS === 'ios') {
      RNHealthkit.completeAllTasks();
    }
  }

  static async enableBackgroundDelivery(objectType: HKObjectType, frequency: HKUpdateFrequency): Promise<any> {
    if (Platform.OS === 'ios') {
      return RNHealthkit.enableBackgroundDelivery(objectType, frequency);
    }
    return Promise.reject('ios only');
  }

  static async disableBackgroundDelivery(objectType: HKObjectType): Promise<any> {
    if (Platform.OS === 'ios') {
      return RNHealthkit.disableBackgroundDelivery(objectType);
    }
    return Promise.reject('ios only');
  }

  static async disableAllBackgroundDelivery(): Promise<any> {
    if (Platform.OS === 'ios') {
      return RNHealthkit.disableAllBackgroundDelivery();
    }
    return Promise.reject('ios only');
  }

  static async queryCorrelation(query: HKCorrelationQuery): Promise<HKCorrelation[]> {
    if (Platform.OS === 'ios') {
      const result = await RNHealthkit.queryCorrelation(query.toJS());
      return (result || []).map((r: any) => new HKCorrelation(r));
    }
    return Promise.reject('ios only');
  }

  static async queryDocument(query: HKDocumentQuery): Promise<HKDocumentSample[]> {
    if (Platform.OS === 'ios') {
      const result = await RNHealthkit.queryDocument(query.toJS());
      return (result || []).map((r: any) => new HKDocumentSample(r));
    }
    return Promise.reject('ios only');
  }

  static async queryAnchored(query: HKAnchoredObjectQuery): Promise<HKAnchoredObjectQueryResult> {
    if (Platform.OS === 'ios') {
      const result = await RNHealthkit.queryAnchored(query.toJS());
      return new HKAnchoredObjectQueryResult(result);
    }
    return Promise.reject('ios only');
  }

  static async queryWorkoutRoute(workoutUuid: string): Promise<CLLocation[]> {
    if (Platform.OS === 'ios') {
      const result = await RNHealthkit.queryWorkoutRoute({ uuid: workoutUuid });
      return (result || []).map((r: any) => new CLLocation(r));
    }
    return Promise.reject('ios only');
  }

  static async queryHeartbeatSeries(query: HKSampleQuery): Promise<HKHeartbeatSeriesSample | undefined> {
    if (Platform.OS === 'ios') {
      const result = await RNHealthkit.queryHeartbeatSeries(query.toJS());
      return result ? new HKHeartbeatSeriesSample(result) : undefined;
    }
    return Promise.reject('ios only');
  }

  static save(samples: HKSample[]): Promise<any> {
    if (Platform.OS === 'ios') {
      const json = samples.map((s: HKSample) => s.toJS());
      return RNHealthkit.save(json);
    }
    return Promise.reject('ios only');
  }

  static saveQuantity(samples: HKQuantitySample[]): Promise<any> {
    if (Platform.OS === 'ios') {
      const json = samples.map((s: HKSample) => s.toJS());
      return RNHealthkit.saveQuantity(json);
    }
    return Promise.reject('ios only');
  }

  static saveCategory(samples: HKCategorySample[]): Promise<any> {
    if (Platform.OS === 'ios') {
      const json = samples.map((s: HKCategorySample) => s.toJS());
      return RNHealthkit.saveCategory(json);
    }
    return Promise.reject('ios only');
  }

  static saveCorrelation(samples: HKCorrelation[]): Promise<any> {
    if (Platform.OS === 'ios') {
      const json = samples.map((s: HKCorrelation) => s.toJS());
      return RNHealthkit.saveCorrelation(json);
    }
    return Promise.reject('ios only');
  }

  static saveWorkout(samples: HKWorkout[]): Promise<any> {
    if (Platform.OS === 'ios') {
      const json = samples.map((s: HKWorkout) => s.toJS());
      return RNHealthkit.saveWorkout(json);
    }
    return Promise.reject('ios only');
  }

  static subscribe(event: string, callback: (data: any) => void): EmitterSubscription {
    return this.emitter.addListener(event, callback);
  }
}
