//
//  KinasticHealthkit.swift
//  KinasticHealthkit
//
//  Created by neo on 27.02.20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

@objc(KinasticHealthkit)
class KinasticHealthkit: RCTEventEmitter {
    var hasSubscribers = false
    var backgroundTasks: [String: HKObserverQueryCompletionHandler] = [:]
    
    var cachedEvents: [String: Any] = [:]
    let healthKit = HKHealthStore()
    let iso8061Format = "yyyy-MM-dd'T'HH:mm:ss.SSSZZZZZ"
    let readPermissionBlacklist = [
        "food",
        "bloodPressure"
    ]
    let writePermissionBlacklist = [
        "irregularHeartRhythmEvent",
        "walkingHeartRateAverage",
        "appleStandTime",
        "appleStandHour",
        "food",
        "nikeFuel",
        "bloodPressure",
        "audioExposureEvent",
        "appleExerciseTime",
        "lowHeartRateEvent",
        "highHeartRateEvent"
    ]
    
    @objc
    override func supportedEvents() -> [String] {
        return [
            "sampleTypeChanged"
        ]
    }
    
    override func startObserving() {
        hasSubscribers = true
    }
    
    override func stopObserving() {
        hasSubscribers = false
        cachedEvents = [:]
    }
    
    @objc
    override func addListener(_ eventName: String!) {
        super.addListener(eventName)
        if let event = cachedEvents[eventName] {
            sendEvent(withName: eventName, body: event)
            cachedEvents.removeValue(forKey: eventName)
        }
    }
    
    @objc override class func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc(isAvailable:reject:)
    func isAvailable(_ resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
        resolve(HKHealthStore.isHealthDataAvailable())
    }

    @objc(requestAuthorization:writePermissionsString:resolve:reject:)
    func requestAuthorization(_ readPermissionsString: [String], writePermissionsString: [String], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        if (HKHealthStore.isHealthDataAvailable()) {
            if !readPermissionsString.isEmpty || !writePermissionsString.isEmpty {
                let readPermissions = self.parsePermissions(readPermissionsString)
                let writePermissions = self.parseWritePermissions(permissions: writePermissionsString)

                self.healthKit.requestAuthorization(toShare: writePermissions, read: readPermissions) { b, error in
                    if b {
                        resolve("success")
                    } else {
                        reject("denied", "error", error)
                    }
                }

            } else {
                reject("error", "Permissions missing", nil)
            }
        } else {
            reject("error", "Unavailable", nil)
        }
    }

    @objc(authorizationStatus:resolve:reject:)
    func authorizationStatus(_ permissions: [String], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        if (HKHealthStore.isHealthDataAvailable()) {
            if !permissions.isEmpty {
                let status = self.parsePermissions(permissions).map { perm -> String in
                    getAuthorizationStatusString(self.healthKit.authorizationStatus(for: perm))
                }
                resolve(status)
            } else {
                reject("error", "Permissions missing", nil)
            }
        } else {
            reject("error", "Unavailable", nil)
        }
    }
    
    @objc(getRequestStatusForAuthorization:writePermissionsString:resolve:reject:)
    func getRequestStatusForAuthorization(_ readPermissionsString: [String], writePermissionsString: [String], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        if (HKHealthStore.isHealthDataAvailable()) {
            if !readPermissionsString.isEmpty || !writePermissionsString.isEmpty {
                let readPermissions = self.parsePermissions(readPermissionsString)
                let writePermissions = self.parseWritePermissions(permissions: writePermissionsString)

                if #available(iOS 12.0, *) {
                    self.healthKit.getRequestStatusForAuthorization(toShare: writePermissions, read: readPermissions) { (status, error) in
                        resolve(self.getAuthorizationStatusString(status))
                    }
                } else {
                    reject("unavailable", "iOS >= 12.0", nil)
                }

            } else {
                reject("error", "Permissions missing", nil)
            }
        } else {
            reject("error", "Unavailable", nil)
        }
    }
    
    /*
     func getHealthkit(): HKHealthStore? {
         if HKHealthStore.isHealthDataAvailable() {
             self.healthKit = self.healthKit ?? HKHealthStore()
         }
         return self.healthKit
     }
     */
}
