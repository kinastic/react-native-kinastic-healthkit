//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    func parseCorrelationType(sample: [String: Any]) -> HKCorrelationType? {
        if let typeString = sample["correlationType"] as? String {
            return self.getCorrelationTypeFromString(input: typeString)
        }

        print("Invalid 'categoryType' from HKCategoryType")
        return nil
    }

    func parseCorrelationObjects(sample: [String: Any]) -> Set<HKSample>? {
        guard let objectsData = sample["objects"] as? [Any] else {
            print("Missing 'objects' in input")
            return nil
        }

        return Set(objectsData.map {
            parseCorrelationObject(item: $0)
        }.compactMap {
            $0
        })
    }

    func parseCorrelationObject(item: Any?) -> HKSample? {
        if let dict = item as? [String: Any?] {
            return parseSample(dict)
        }
        return nil
    }

    func parseSampleCorrelation(sample: [String: Any]) -> HKCorrelation? {

        guard let type = parseCorrelationType(sample: sample) else {
            return nil
        }

        guard let startDate = parseStartDate(sample: sample) else {
            return nil
        }

        guard let objects = parseCorrelationObjects(sample: sample) else {
            return nil
        }

        var endDate = self.parseISO8601DateFromString(sample["endDate"] as? String, withDefault: startDate) ?? startDate

        if startDate > endDate {
            endDate = startDate
        }

        let device = parseDevice(sample["device"])
        let metadata = sample["metadata"] as? [String: Any]


        return HKCorrelation(type: type, start: startDate, end: endDate, objects: objects, device: device, metadata: metadata)
    }
}
