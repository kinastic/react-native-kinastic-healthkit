var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { NativeModules, NativeEventEmitter, Platform } from 'react-native';
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
        if (Platform.OS === 'ios') {
            return RNHealthkit.requestAuthorization(readPermissions, writePermissions);
        }
        return Promise.reject('ios only');
    }
    static authorizationStatus(permissions) {
        if (Platform.OS === 'ios') {
            return RNHealthkit.authorizationStatus(permissions);
        }
        return Promise.reject('ios only');
    }
    static getRequestStatusForAuthorization(readPermissions, writePermissions = []) {
        if (Platform.OS === 'ios') {
            return RNHealthkit.authorizationStatus(readPermissions, writePermissions);
        }
        return Promise.reject('ios only');
    }
    static querySample(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Platform.OS === 'ios') {
                const result = yield RNHealthkit.querySample(query.toJS());
                return (result || []).map((r) => HKSampleBuilder.build(r));
            }
            return Promise.reject('ios only');
        });
    }
    static querySampleByWorkout(query, workout) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Platform.OS === 'ios') {
                const json = query.toJS();
                if (workout instanceof HKWorkout) {
                    json.workoutUuid = workout.uuid;
                }
                else {
                    json.workoutUuid = workout;
                }
                const result = yield RNHealthkit.querySampleByWorkout(json);
                return (result || []).map((r) => HKSampleBuilder.build(r));
            }
            return Promise.reject('ios only');
        });
    }
    static queryObserver(sampleType, predicate) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Platform.OS === 'ios') {
                return RNHealthkit.queryObserver(sampleType, predicate === null || predicate === void 0 ? void 0 : predicate.toJS());
            }
            return Promise.reject('ios only');
        });
    }
    /**
     * It is very important to call this method after the event emitter sent a "smapleTypeChanged" event.
     * @param taskId taskId provided from the event emitter
     */
    static completeTask(taskId) {
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
    static enableBackgroundDelivery(objectType, frequency) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Platform.OS === 'ios') {
                return RNHealthkit.enableBackgroundDelivery(objectType, frequency);
            }
            return Promise.reject('ios only');
        });
    }
    static disableBackgroundDelivery(objectType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Platform.OS === 'ios') {
                return RNHealthkit.disableBackgroundDelivery(objectType);
            }
            return Promise.reject('ios only');
        });
    }
    static disableAllBackgroundDelivery() {
        return __awaiter(this, void 0, void 0, function* () {
            if (Platform.OS === 'ios') {
                return RNHealthkit.disableAllBackgroundDelivery();
            }
            return Promise.reject('ios only');
        });
    }
    static queryCorrelation(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Platform.OS === 'ios') {
                const result = yield RNHealthkit.queryCorrelation(query.toJS());
                return (result || []).map((r) => new HKCorrelation(r));
            }
            return Promise.reject('ios only');
        });
    }
    static queryDocument(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Platform.OS === 'ios') {
                const result = yield RNHealthkit.queryDocument(query.toJS());
                return (result || []).map((r) => new HKDocumentSample(r));
            }
            return Promise.reject('ios only');
        });
    }
    static queryAnchored(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Platform.OS === 'ios') {
                const result = yield RNHealthkit.queryAnchored(query.toJS());
                return new HKAnchoredObjectQueryResult(result);
            }
            return Promise.reject('ios only');
        });
    }
    static queryWorkoutRoute(workoutUuid) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Platform.OS === 'ios') {
                const result = yield RNHealthkit.queryWorkoutRoute({ uuid: workoutUuid });
                return (result || []).map((r) => new CLLocation(r));
            }
            return Promise.reject('ios only');
        });
    }
    static queryHeartbeatSeries(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Platform.OS === 'ios') {
                const result = yield RNHealthkit.queryHeartbeatSeries(query.toJS());
                return result ? new HKHeartbeatSeriesSample(result) : undefined;
            }
            return Promise.reject('ios only');
        });
    }
    static save(samples) {
        if (Platform.OS === 'ios') {
            const json = samples.map((s) => s.toJS());
            return RNHealthkit.save(json);
        }
        return Promise.reject('ios only');
    }
    static saveQuantity(samples) {
        if (Platform.OS === 'ios') {
            const json = samples.map((s) => s.toJS());
            return RNHealthkit.saveQuantity(json);
        }
        return Promise.reject('ios only');
    }
    static saveCategory(samples) {
        if (Platform.OS === 'ios') {
            const json = samples.map((s) => s.toJS());
            return RNHealthkit.saveCategory(json);
        }
        return Promise.reject('ios only');
    }
    static saveCorrelation(samples) {
        if (Platform.OS === 'ios') {
            const json = samples.map((s) => s.toJS());
            return RNHealthkit.saveCorrelation(json);
        }
        return Promise.reject('ios only');
    }
    static saveWorkout(samples) {
        if (Platform.OS === 'ios') {
            const json = samples.map((s) => s.toJS());
            return RNHealthkit.saveWorkout(json);
        }
        return Promise.reject('ios only');
    }
    static subscribe(event, callback) {
        return this.emitter.addListener(event, callback);
    }
}
KinasticHealthKit.emitter = new NativeEventEmitter(RNHealthkit);
//# sourceMappingURL=KinasticHealthKit.js.map