//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    func parseSampleQuantity(sample: [String: Any]) -> HKQuantitySample? {
        guard let typeIdentifier = getQuantityTypeIdentifierFromString(type: sample["sampleType"] as? String) else {
            print("Missing/Invalid 'sampleType' from HKQuantityType")
            return nil
        }

        guard let type = HKQuantityType.quantityType(forIdentifier: typeIdentifier) else {
            print("Invalid 'sampleType' from HKQuantityType")
            return nil
        }

        guard let value = sample["value"] as? Double else {
            print("Missing 'value' (Double)")
            return nil
        }

        guard let unit = parseUnit(sample: sample) ?? determineUnit(type: typeIdentifier) else {
            print("Cannot parse or determine unit for \(type.identifier)")
            return nil
        }

        guard type.is(compatibleWith: unit) else {
            print("Type \(type.identifier) is incompatible with unit \(unit.unitString)")
            return nil
        }

        guard let startDate = parseStartDate(sample: sample) else {
            return nil
        }

        var endDate = parseEndDate(sample: sample, withDefault: Date()) ?? startDate
        let quantity = HKQuantity(unit: unit, doubleValue: value)

        if startDate > endDate {
            endDate = startDate
        }

        let device = parseDevice(sample["device"])
        let metadata = sample["metadata"] as? [String: Any]

        return HKQuantitySample(type: type, quantity: quantity, start: startDate, end: endDate, device: device, metadata: metadata)
    }
}
