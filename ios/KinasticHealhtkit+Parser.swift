//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    func parseSample(_ sample: [String: Any]) -> HKSample? {
        if let type = sample["sampleType"] as? String {
            switch type {
            case "quantity": return parseSampleQuantity(sample: sample)
            case "category": return parseSampleCategory(sample: sample)
            case "correlation": return parseSampleCorrelation(sample: sample)
            case "workout": return parseSampleWorkout(sample: sample)
            default: return nil
            }
        }
        return nil
    }

    func parseUnit(sample: [String: Any]) -> HKUnit? {
        guard let unitString = sample["unit"] as? String else {
            print("Missing 'unit'")
            return nil
        }

        let unitComponents = unitString.components(separatedBy: "/")

        if let unit = getUnitFromString(input: unitComponents[0]) {
            if unitComponents.count > 1 {
                if let secondUnit = getUnitFromString(input: unitComponents[1]) {
                    return unit.unitDivided(by: secondUnit)
                }
            }
            return unit
        }
        
        print("Invalid 'unit' from HKUnit")
        return nil
    }

    func parseInt(sample: Any?, withDefault: Int = 0) -> Int? {
        if let value = sample as? String {
            return Int(value) ?? 0
        }
        return nil
    }


    func parseValue(sample: [String: Any]) -> Double? {
        if let valueString = sample["value"] as? String {
            return Double(valueString)
        }
        print("Missing 'value'")
        return nil
    }

    func parseQuantity(input: [String: Any]) -> HKQuantity? {
        guard let value = parseValue(sample: input) else {
            return nil
        }

        guard let unit = parseUnit(sample: input) else {
            return nil
        }

        return HKQuantity(unit: unit, doubleValue: value)
    }

    func parseStartDate(sample: [String: Any]) -> Date? {
        if let startDate = parseDate(input: sample["startDate"], withDefault: Date()) {
            return startDate
        }
        print("Invalid 'startDate' should be 'yyyy-MM-ddTHH:mm:ss.SSSZ'")
        return nil
    }

    func parseEndDate(sample: [String: Any], withDefault: Date? = nil) -> Date? {
        return parseDate(input: sample["endDate"], withDefault: withDefault)
    }
    
    func parseDate(input: Any?, withDefault: Date? = nil) -> Date? {
        if let dateString = input as? String {
            return parseISO8601DateFromString(dateString, withDefault: withDefault)
        }
        return nil
    }

    func parseDevice(_ input: Any?) -> HKDevice? {
        if let device = input as? Dictionary<String, Any> {
            return HKDevice(
                    name: device["name"] as? String,
                    manufacturer: device["manufacturer"] as? String,
                    model: device["model"] as? String,
                    hardwareVersion: device["hardwareVersion"] as? String,
                    firmwareVersion: device["firmwareVersion"] as? String,
                    softwareVersion: device["softwareVersion"] as? String,
                    localIdentifier: device["localIdentifier"] as? String,
                    udiDeviceIdentifier: device["udiDeviceIdentifier"] as? String)
        }
        return nil
    }
}
