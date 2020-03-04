//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit
import CoreLocation

class HKWorkoutWithSamples {
    let workout: HKWorkout
    let samples: [HKSample]
    let locations: [CLLocation]

    init(workout: HKWorkout, samples: [HKSample], locations: [CLLocation]) {
        self.workout = workout
        self.samples = samples
        self.locations = locations
    }
}

extension KinasticHealthkit {

    @objc(save:resolve:reject:)
    func save(_ samples: [[String: Any]], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let objects = samples.map { dictionary -> HKObject? in
            parseSample(dictionary)
        }.compactMap { $0 }

        saveObjects(objects: objects, resolve: resolve, reject: reject)
    }
    
    @objc(saveQuantity:resolve:reject:)
    func saveQuantity(_ samples: [[String: Any]], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let objects = samples.map { parseSampleQuantity(sample: $0) }.compactMap { $0 }

        saveObjects(objects: objects, resolve: resolve, reject: reject)
    }
    
    @objc(saveCategory:resolve:reject:)
    func saveCategory(_ samples: [[String: Any]], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let objects = samples.map { parseSampleCategory(sample: $0) }.compactMap { $0 }

        saveObjects(objects: objects, resolve: resolve, reject: reject)
    }
    
    @objc(saveCorrelation:resolve:reject:)
    func saveCorrelation(_ samples: [[String: Any]], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let objects = samples.map { parseSampleCorrelation(sample: $0) }.compactMap { $0 }

        saveObjects(objects: objects, resolve: resolve, reject: reject)
    }
    
    @objc(saveWorkout:resolve:reject:)
    func saveWorkout(_ samples: [[String: Any]], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let objects = samples.map { parseWorkoutWithSamples(sample: $0) }.compactMap { $0 }
        saveWorkoutObjects(objects: objects, resolve: resolve, reject: reject)
    }

    @objc(deleteObject:resolve:reject:)
    func deleteObject(_ params: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
//        self.healthKit.delete(<#T##object: HKObject##HealthKit.HKObject#>, withCompletion: <#T##@escaping (Bool, Error?) -> Void##@escaping (Swift.Bool, Swift.Error?) -> Swift.Void#>)
    }

    @objc(deleteObjectOf:resolve:reject:)
    func deleteObjectOf(_ params: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
//        self.healthKit.deleteObjects(of: <#T##HKObjectType##HealthKit.HKObjectType#>, predicate: <#T##NSPredicate##Foundation.NSPredicate#>, withCompletion: <#T##@escaping (Bool, Int, Error?) -> Void##@escaping (Swift.Bool, Swift.Int, Swift.Error?) -> Swift.Void#>)
    }

    @objc(deleteObjects:resolve:reject:)
    func deleteObjects(_ params: [[String: Any]], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
//        self.healthKit.delete(<#T##objects: [HKObject]##[HealthKit.HKObject]#>, withCompletion: <#T##@escaping (Bool, Error?) -> Void##@escaping (Swift.Bool, Swift.Error?) -> Swift.Void#>)
    }

    func saveWorkoutObjects(objects: [HKWorkoutWithSamples], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        if !objects.isEmpty {
            saveNextWorkoutObject(objects: objects, index: 0) {
                resolve("success")
            }
        } else {
            reject("error", "empty", nil)
        }
    }

    func saveNextWorkoutObject(objects: [HKWorkoutWithSamples], index: Int, completion: @escaping () -> Void) {
        if index < objects.count {
            let object = objects[index]
            if #available(iOS 11.0, *), object.locations.count > 0 {
                self.prepareWorkoutRoute(workout: object.workout, locations: object.locations) { routeBuilder in
                    self.saveWorkoutObject(workout: object.workout, samples: object.samples) {
                        routeBuilder?.finishRoute(with: object.workout, metadata: nil) { route, error in
                            self.saveNextWorkoutObject(objects: objects, index: (index + 1), completion: completion)
                        }
                    }
                }
            } else {
                self.saveWorkoutObject(workout: object.workout, samples: object.samples) {
                    self.saveNextWorkoutObject(objects: objects, index: (index + 1), completion: completion)
                }
            }
        } else {
            completion()
        }
    }

    func saveWorkoutObject(workout: HKWorkout, samples: [HKSample], completion: @escaping () -> Void) {
        self.healthKit.save(workout) { (success: Bool, error: Error?) -> Void in
            if (success) {
                self.saveWorkoutSamples(workout: workout, samples: samples) {
                    completion()
                }
            } else {
                completion()
            }
        }
    }

    @available(iOS 11.0, *)
    func prepareWorkoutRoute(workout: HKWorkout, locations: [CLLocation], completion: @escaping (_: HKWorkoutRouteBuilder?) -> Void) {
        guard locations.count > 0 else {
            completion(nil)
            return
        }

        let routeBuilder = HKWorkoutRouteBuilder(healthStore: self.healthKit, device: nil)
        routeBuilder.insertRouteData(locations) { b, error in
            completion(routeBuilder)
        }
    }

    func saveWorkoutSamples(workout: HKWorkout, samples: [HKSample], completion: @escaping () -> Void) {
        guard samples.count > 0 else {
            completion()
            return
        }
        self.healthKit.add(samples, to: workout) { b, error in
            completion()
        }
    }
    
    func saveObjects(objects: [HKObject], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        if !objects.isEmpty {
            self.healthKit.save(objects) { (b: Bool, error: Error?) -> Void in
                if (b) {
                    resolve("success")
                } else {
                    reject("error", "Error: \(error?.localizedDescription)", error)
                }
            }
        } else {
            reject("error", "empty", nil)
        }
    }
}
