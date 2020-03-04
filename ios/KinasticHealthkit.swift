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
    
    let healthKit = HKHealthStore()
    let iso8061Format = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
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
        return []
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
    
    /*
     func getHealthkit(): HKHealthStore? {
         if HKHealthStore.isHealthDataAvailable() {
             self.healthKit = self.healthKit ?? HKHealthStore()
         }
         return self.healthKit
     }
     */
}
