var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { NativeModules, NativeEventEmitter } from 'react-native';
import { HKWorkout } from './HKWorkout';
import { HKCorrelation } from './HKCorrelation';
import { HKSampleBuilder } from './HKSampleBuilder';
import { HKDocumentSample } from './HKDocumentSample';
import { CLLocation } from './CLLocation';
import { HKAnchoredObjectQueryResult } from './HKAnchoredObjectQueryResult';
import { HKHeartbeatSeriesSample } from './HKHeartbeatSeriesSample';
const { KinasticHealthkit: RNHealthkit } = NativeModules;
export class KinasticHealthKit {
    static requestAuthorization(readPermissions, writePermissions = []) {
        return RNHealthkit.requestAuthorization(readPermissions, writePermissions);
    }
    static authorizationStatus(permissions) {
        return RNHealthkit.authorizationStatus(permissions);
    }
    static getRequestStatusForAuthorization(readPermissions, writePermissions = []) {
        return RNHealthkit.authorizationStatus(readPermissions, writePermissions);
    }
    static querySample(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield RNHealthkit.querySample(query.toJS());
            return (result || []).map((r) => HKSampleBuilder.build(r));
        });
    }
    static querySampleByWorkout(query, workout) {
        return __awaiter(this, void 0, void 0, function* () {
            const json = query.toJS();
            if (workout instanceof HKWorkout) {
                json.workoutUuid = workout.uuid;
            }
            else {
                json.workoutUuid = workout;
            }
            const result = yield RNHealthkit.querySampleByWorkout(json);
            return (result || []).map((r) => HKSampleBuilder.build(r));
        });
    }
    static queryObserver(sampleType, predicate) {
        return __awaiter(this, void 0, void 0, function* () {
            return RNHealthkit.queryObserver(sampleType, predicate === null || predicate === void 0 ? void 0 : predicate.toJS());
        });
    }
    /**
     * It is very important to call this method after the event emitter sent a "smapleTypeChanged" event.
     * @param taskId taskId provided from the event emitter
     */
    static completeTask(taskId) {
        RNHealthkit.completeTask(taskId);
    }
    static enableBackgroundDelivery(objectType, frequency) {
        return __awaiter(this, void 0, void 0, function* () {
            return RNHealthkit.enableBackgroundDelivery(objectType, frequency);
        });
    }
    static disableBackgroundDelivery(objectType) {
        return __awaiter(this, void 0, void 0, function* () {
            return RNHealthkit.disableBackgroundDelivery(objectType);
        });
    }
    static disableAllBackgroundDelivery() {
        return __awaiter(this, void 0, void 0, function* () {
            return RNHealthkit.disableAllBackgroundDelivery();
        });
    }
    static queryCorrelation(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield RNHealthkit.queryCorrelation(query.toJS());
            return (result || []).map((r) => new HKCorrelation(r));
        });
    }
    static queryDocument(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield RNHealthkit.queryDocument(query.toJS());
            return (result || []).map((r) => new HKDocumentSample(r));
        });
    }
    static queryAnchored(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield RNHealthkit.queryAnchored(query.toJS());
            return new HKAnchoredObjectQueryResult(result);
        });
    }
    static queryWorkoutRoute(workoutUuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield RNHealthkit.queryWorkoutRoute({ uuid: workoutUuid });
            return (result || []).map((r) => new CLLocation(r));
        });
    }
    static queryHeartbeatSeries(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield RNHealthkit.queryHeartbeatSeries(query.toJS());
            return result ? new HKHeartbeatSeriesSample(result) : undefined;
        });
    }
    static save(samples) {
        const json = samples.map((s) => s.toJS());
        return RNHealthkit.save(json);
    }
    static saveQuantity(samples) {
        const json = samples.map((s) => s.toJS());
        return RNHealthkit.saveQuantity(json);
    }
    static saveCategory(samples) {
        const json = samples.map((s) => s.toJS());
        return RNHealthkit.saveCategory(json);
    }
    static saveCorrelation(samples) {
        const json = samples.map((s) => s.toJS());
        return RNHealthkit.saveCorrelation(json);
    }
    static saveWorkout(samples) {
        const json = samples.map((s) => s.toJS());
        return RNHealthkit.saveWorkout(json);
    }
    static subscribe(event, callback) {
        return this.emitter.addListener(event, callback);
    }
}
KinasticHealthKit.emitter = new NativeEventEmitter(RNHealthkit);
//# sourceMappingURL=KinasticHealthKit.js.map