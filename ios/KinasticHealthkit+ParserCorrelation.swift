//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    func parseCorrelationType(sample: [String: Any?]) -> HKCorrelationType? {
        guard self.getCorrelationTypeFromString(input: sample["correlationType"]) else {
            print("Invalid 'categoryType' from HKCategoryType")
            return nil
        }
    }

    func parseCorrelationObjects(sample: [String: Any?]) -> [HKObject]? {
        guard let objectsData = sample["objects"] as? Array else {
            print("Missing 'objects' in input")
            return nil
        }

        return objectsData.map { parseCorrelationObject($0) }
                .compactMap { $0 }
    }

    func parseCorrelationObject(item: Any?) -> HKObject? {
        if let dict = item as? Dictionary {
            return parseSample(dict)
        }
        return nil
    }

    func parseSampleCorrelation(sample: [String: Any?]) -> HKCorrelation? {

        guard let type = parseCorrelationType(sample: sample) else {
            return nil
        }

        guard let startDate = parseStartDate(sample: sample) else {
            return nil
        }

        guard let objects = parseCorrelationObjects(sample: sample) else {
            return nil
        }

        var endDate = self.parseISO8601DateFromString(sample["endDate"], withDefault: startDate)

        if startDate > endDate {
            endDate = startDate
        }

        let device = parseDevice(sample["device"])
        let metadata = sample["metadata"]


        return HKCorrelation(type: type, start: startDate, end: endDate, objects: objects, device: device, metadata: metadata)
    }
}