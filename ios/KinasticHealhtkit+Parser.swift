//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit
import KinasticHealthkit

extension KinasticHealthkit {

    func parseSample(_ sample: [String: Any?]) -> HKObject? {
        switch sample["sampleType"] {
        case "quantity": return parseSampleQuantity(sample: sample)
        case "category": return parseSampleCategory(sample: sample)
        case "correlation": return parseSampleCorrelation(sample: sample)
        case "workout": return parseSampleWorkout(sample: sample)
        default: return nil
        }
    }

    func parseUnit(sample: [String: Any?]) -> HKUnit? {
        guard let unitString = sample["unit"] as? String else {
            print("Missing 'unit'")
            return nil
        }

        let unitComponents = unitString.components(separatedBy: "/")

        if let unit = self.getUnitFromString(input: sample["unit"]) {
            return unit
        }
        print("Invalid 'unit' from HKUnit")
        return nil
    }

    func parseInt(sample: Any?, withDefault: Int = 0) -> Int {
        if let value = sample as? String {
            return Int(value)
        }
        return nil
    }


    func parseValue(sample: [String: Any?]) -> Double? {
        if let valueString = sample["value"] as? String {
            return Double(valueString)
        }
        print("Missing 'value'")
        return nil
    }

    func parseQuantity(input: [String: Any?]) -> HKQuantity? {
        guard let value = parseValue(sample: input) else {
            return nil
        }

        guard let unit = parseUnit(sample: input) else {
            return nil
        }

        return HKQuantity(unit: unit, doubleValue: value)
    }

    func parseStartDate(sample: [String: Any?]) -> Date? {
        if let startDate = parseISO8601DateFromString(sample["startDate"], withDefault: Date()) {
            return startDate
        }
        print("Invalid 'startDate' should be 'yyyy-MM-ddTHH:mm:ss.SSSZ'")
        return nil
    }

    func parseEndDate(sample: [String: Any?], withDefault: Date? = nil) -> Date? {
        if let endDate = parseISO8601DateFromString(sample["endDate"], withDefault: withDefault) {
            return endDate
        }
        return nil
    }

    func parseDevice(_ input: Any?) -> HKDevice? {
        if let device = input as? Dictionary {
            return HKDevice(
                    name: device["name"],
                    manufacturer: device["manufacturer"],
                    model: device["model"],
                    hardwareVersion: device["hardwareVersion"],
                    firmwareVersion: device["firmwareVersion"],
                    softwareVersion: device["softwareVersion"],
                    localIdentifier: device["localIdentifier"],
                    udiDeviceIdentifier: device["udiDeviceIdentifier"])
        }
        return nil
    }
}