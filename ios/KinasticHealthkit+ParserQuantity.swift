//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    func parseQuantityType(sample: [String: Any]) -> HKQuantityType? {
        if let typeString = sample["quantityType"] as? String {
            return getQuantityTypeFromString(typeString)
        }
        print("Invalid 'quantityType' from HKQuantityType")
        return nil
    }

    func parseSampleQuantity(sample: [String: Any]) -> HKQuantitySample? {
        guard let type = parseQuantityType(sample: sample) else {
            return nil
        }

        guard let quantity = parseQuantity(input: sample) else {
            return nil
        }

        guard let startDate = parseStartDate(sample: sample) else {
            return nil
        }

        var endDate = parseEndDate(sample: sample, withDefault: Date()) ?? startDate

        if startDate > endDate {
            endDate = startDate
        }

        let device = parseDevice(sample["device"])
        let metadata = sample["metadata"] as? [String: Any]

        return HKQuantitySample(type: type, quantity: quantity, start: startDate, end: endDate, device: device, metadata: metadata)
    }
}
