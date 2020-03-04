"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var HKCorrelation_1 = require("./HKCorrelation");
var HKSampleBuilder_1 = require("./HKSampleBuilder");
var HKDocumentSample_1 = require("./HKDocumentSample");
var CLLocation_1 = require("./CLLocation");
var HKAnchoredObjectQueryResult_1 = require("./HKAnchoredObjectQueryResult");
var RNHealthkit = react_native_1.NativeModules.KinasticHealthkit;
var KinasticHealthKit = /** @class */ (function () {
    function KinasticHealthKit() {
    }
    KinasticHealthKit.requestAuthorization = function (readPermissions, writePermissions) {
        return RNHealthkit.requestAuthorization(readPermissions, writePermissions);
    };
    KinasticHealthKit.querySample = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RNHealthkit.querySample(query.toJS())];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, (result || []).map(function (r) { return HKSampleBuilder_1.default.build(r); })];
                }
            });
        });
    };
    KinasticHealthKit.queryCorrelation = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RNHealthkit.queryCorrelation(query.toJS())];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, (result || []).map(function (r) { return new HKCorrelation_1.default(r); })];
                }
            });
        });
    };
    KinasticHealthKit.queryDocument = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RNHealthkit.queryDocument(query.toJS())];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, (result || []).map(function (r) { return new HKDocumentSample_1.default(r); })];
                }
            });
        });
    };
    KinasticHealthKit.queryAnchored = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RNHealthkit.queryAnchored(query.toJS())];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new HKAnchoredObjectQueryResult_1.default(result)];
                }
            });
        });
    };
    KinasticHealthKit.queryWorkoutRoute = function (workoutUuid) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RNHealthkit.queryWorkoutRoute({ uuid: workoutUuid })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, (result || []).map(function (r) { return new CLLocation_1.default(r); })];
                }
            });
        });
    };
    KinasticHealthKit.save = function (samples) {
        var json = samples.map(function (s) { return s.toJS(); });
        return RNHealthkit.save(json);
    };
    KinasticHealthKit.saveQuantity = function (samples) {
        var json = samples.map(function (s) { return s.toJS(); });
        return RNHealthkit.saveQuantity(json);
    };
    KinasticHealthKit.saveCategory = function (samples) {
        var json = samples.map(function (s) { return s.toJS(); });
        return RNHealthkit.saveCategory(json);
    };
    KinasticHealthKit.saveCorrelation = function (samples) {
        var json = samples.map(function (s) { return s.toJS(); });
        return RNHealthkit.saveCorrelation(json);
    };
    KinasticHealthKit.saveWorkout = function (samples) {
        var json = samples.map(function (s) { return s.toJS(); });
        return RNHealthkit.saveWorkout(json);
    };
    return KinasticHealthKit;
}());
exports.KinasticHealthKit = KinasticHealthKit;
