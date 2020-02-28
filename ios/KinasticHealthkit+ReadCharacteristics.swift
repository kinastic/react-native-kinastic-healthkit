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
            let sex = try self.healthKit.biologicalSex()
            resolve(self.sexString(sex: sex))
        } catch {
            reject("Unauthorized", "error", nil)
        }
    }

    @objc(getBloodType:reject:)
    func getBloodType(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        do {
            let value = try self.healthKit.bloodType()
            resolve(bloodTypeString(bloodType: value))
        } catch {
            reject("Unauthorized", "error", nil)
        }
    }

    @objc(getDateOfBirth:reject:)
    func getDateOfBirth(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        do {
            let value = try self.healthKit.dateOfBirth()
            resolve(buildISO8601StringFromDate(value))
        } catch {
            reject("Unauthorized", "error", nil)
        }
    }

    @objc(getEarliestPermittedSampleDate:reject:)
    func getEarliestPermittedSampleDate(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let value = self.healthKit.earliestPermittedSampleDate()
        resolve(buildISO8601StringFromDate(value))
    }

    @objc(getFitzpatrickSkinType:reject:)
    func getFitzpatrickSkinType(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        do {
            let value = try self.healthKit.fitzpatrickSkinType()
            resolve(fitzpatrickSkinTypeString(fitzpatrickSkinType: value))
        } catch {
            reject("Unauthorized", "error", nil)
        }
    }

    @objc(getWheelchairUse:reject:)
    func getWheelchairUse(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        do {
            if #available(iOS 10.0, *) {
                let value = try self.healthKit.wheelchairUse()
                resolve(wheelchairUseString(wheelchairUse: value))
            } else {
                resolve("notSet")
            }

        } catch {
            reject("Unauthorized", "error", nil)
        }
    }
}
