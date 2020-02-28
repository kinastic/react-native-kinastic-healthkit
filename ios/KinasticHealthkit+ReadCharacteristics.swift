//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    @objc(getBiologicalSex:reject:)
    func getBiologicalSex(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        do {
            if let sex = try self.healthKit.biologicalSex() {
                resolve(self.sexString(sex: sex))
            } else {
                reject()
            }
        } catch {
            reject("Unauthorized")
        }
    }

    @objc(getBloodType:reject:)
    func getBloodType(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        do {
            if let value = try self.healthKit.bloodType() {
                resolve(bloodTypeString(bloodType: value))
            } else {
                reject()
            }

        } catch {
            reject("Unauthorized")
        }
    }

    @objc(getDateOfBirth:reject:)
    func getDateOfBirth(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        do {
            if let value = try self.healthKit.dateOfBirth() {
                resolve(buildISO8601StringFromDate(value))
            } else {
                reject()
            }

        } catch {
            reject("Unauthorized")
        }
    }

    @objc(getEarliestPermittedSampleDate:reject:)
    func getEarliestPermittedSampleDate(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        do {
            if let value = try self.healthKit.earliestPermittedSampleDate() {
                resolve(buildISO8601StringFromDate(value))
            } else {
                reject()
            }

        } catch {
            reject("Unauthorized")
        }
    }

    @objc(getFitzpatrickSkinType:reject:)
    func getFitzpatrickSkinType(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        do {
            if let value = try self.healthKit.fitzpatrickSkinType() {
                resolve(fitzpatrickSkinTypeString(fitzpatrickSkinType: value))
            } else {
                reject()
            }

        } catch {
            reject("Unauthorized")
        }
    }

    @objc(getWheelchairUse:reject:)
    func getWheelchairUse(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        do {
            if let value = try self.healthKit.wheelchairUse() {
                resolve(wheelchairUseString(wheelchairUse: value))
            } else {
                reject()
            }

        } catch {
            reject("Unauthorized")
        }
    }
}