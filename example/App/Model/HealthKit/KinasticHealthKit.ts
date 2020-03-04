import HKSample from './HKSample';
import { NativeModules } from 'react-native';
import HKWorkout from './HKWorkout';
import HKQuantitySample from './HKQuantitySample';
import HKCorrelation from './HKCorrelation';
import HKCategorySample from './HKCategorySample';
import HKSampleQuery from './HKSampleQuery';
import HKSampleBuilder from './HKSampleBuilder';
import HKDocumentSample from './HKDocumentSample';
import CLLocation from './CLLocation';
import HKCorrelationQuery from './HKCorrelationQuery';
import HKDocumentQuery from './HKDocumentQuery';
import HKAnchoredObjectQuery from './HKAnchoredObjectQuery';
import HKAnchoredObjectQueryResult from './HKAnchoredObjectQueryResult';

const { KinasticHealthkit: RNHealthkit } = NativeModules;

export default class KinasticHealthKit {
  static requestAuthorization(
    readPermissions: string[],
    writePermissions: string[],
  ): Promise<any> {
    return RNHealthkit.requestAuthorization(readPermissions, writePermissions);
  }

  static async querySample(query: HKSampleQuery): Promise<HKSample[]> {
    const result = await RNHealthkit.querySample(query.toJS());
    return (result || []).map((r: any) => HKSampleBuilder.build(r));
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
}
