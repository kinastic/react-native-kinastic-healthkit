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
class KinasticHealthkit: NSObject {

    let healthKit = HKHealthStore()
    let iso8061Format = "yyyy-MM-ddTHH:mm:ss.SSSZ"

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
            } else {
                reject("error", "Permissions missing", nil)
            }
        } else {
            reject("error", "Unavailable", nil)
        }
    }
}
