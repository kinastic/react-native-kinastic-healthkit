//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    func parseSort(item: Any?) -> NSSortDescriptor? {
        if let sortData = item as? Dictionary<String, Any> {
            guard let key = sortData["key"] as? String else {
                print("Missing sort 'key'")
                return nil
            }
            
            let ascending = sortData["ascending"] as? Bool ?? true

            return NSSortDescriptor(key: key, ascending: ascending)
        }
        return nil
    }

    func parseSortArray(value: Any?) -> [NSSortDescriptor]? {
        if let sortArrayRaw = value as? Array<Any> {
            return sortArrayRaw.map { parseSort(item: $0) }
                .compactMap { $0 }
        }
        return nil
    }


    @objc(querySample:resolve:reject:)
    func querySample(_ query: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        
        guard let sampleTypeSTring = query["sampleType"] as? String else {
            reject("format", "sampleType required", nil)
            return
        }
        
        guard let sampleType = getSampleTypeFromString(perm: sampleTypeSTring) else {
            reject("format", "sampleType required", nil)
            return
        }

        guard let startDate = parseStartDate(sample: query) else {
            reject("format", "startDate required", nil)
            return
        }
        
        guard let unit = parseUnit(sample: query) else {
            reject("format", "unit required (later release might be automatic)", nil)
            return
        }

        let limit = parseInt(sample: query["limit"]) ?? HKObjectQueryNoLimit
        let endDate = parseEndDate(sample: query, withDefault: Date()) ?? Date()
        let predicate = predicateForSamplesBetweenDates(startDate: startDate, endDate: endDate)
        
        let sort = parseSortArray(value: query["sort"]) ?? [NSSortDescriptor(key: "startDate", ascending: true)]

        let query = HKSampleQuery(sampleType: sampleType, predicate: predicate, limit: limit, sortDescriptors: sort) { query, samples, error in
            if nil != error {
                reject("error", "Error: \(error?.localizedDescription)", error)
            } else if let data = samples {
                let json = data.map { self.sampleToMap(sample: $0, unit: unit) }
                resolve(json)
            } else {
                resolve([])
            }
        }

        self.healthKit.execute(query)
    }

    func sampleToMap(sample: HKSample, unit: HKUnit) -> [String: Any?]? {
        if sample is HKQuantitySample {
            return quantitySampleToMap(sample: sample as! HKQuantitySample, unit: unit)
        } else if sample is HKCorrelation {
            return correlationToMap(sample: sample as! HKCorrelation, unit: unit)
        } else if sample is HKWorkout {
            return workoutToMap(sample: sample as! HKWorkout, unit: unit)
        } else if sample is HKCategorySample {
            return categorySampleToMap(sample: sample as! HKCategorySample)
        }
        return nil
    }

    func categorySampleToMap(sample: HKCategorySample) -> Dictionary<String, Any?> {
        [
            "sampleType": "category",
            "categoryType": sample.categoryType.identifier,
            "value": sample.value,
            "sourceRevision": sourceRevisionToMap(sourceRevision: sample.sourceRevision),
            "device": deviceToMap(device: sample.device),
            "metadata": sample.metadata
        ]
    }

    func workoutToMap(sample: HKWorkout, unit: HKUnit) -> Dictionary<String, Any?> {
        [
            "sampleType": "correlation",
            "workoutType": stringFromWorkoutActivityType(input: sample.workoutActivityType),
            "startDate": buildISO8601StringFromDate(sample.startDate),
            "endDate": buildISO8601StringFromDate(sample.endDate),
            "sourceRevision": sourceRevisionToMap(sourceRevision: sample.sourceRevision),
            "device": deviceToMap(device: sample.device),
            "workoutEvents": workoutEventsToMap(events: sample.workoutEvents),
            "metadata": sample.metadata
        ]
    }

    func workoutEventsToMap(events: [HKWorkoutEvent]?) -> [[String: Any?]]? {
        events?.map { workoutEventToMap(event: $0) }
    }

    func workoutEventToMap(event: HKWorkoutEvent) -> [String: Any?] {
        var result = [
            "type": workoutEventTypeString(workoutEvent: event.type),
            "date": buildISO8601StringFromDate(event.date),
        ] as [String : Any?]
        
        if #available(iOS 10, *) {
            result["metadata"] = event.metadata
        }
        
        if #available(iOS 11.0, *) {
            result["startDate"] = buildISO8601StringFromDate(event.dateInterval.start)
            result["endDate"] = buildISO8601StringFromDate(event.dateInterval.end)
            result["duration"] = event.dateInterval.duration
        }
        
        return result
    }

    func correlationToMap(sample: HKCorrelation, unit: HKUnit) -> [String: Any?] {
        [
            "sampleType": "correlation",
            "correlationType": correlationTypeToString(value: sample.correlationType),
            "startDate": buildISO8601StringFromDate(sample.startDate),
            "endDate": buildISO8601StringFromDate(sample.endDate),
            "sourceRevision": sourceRevisionToMap(sourceRevision: sample.sourceRevision),
            "device": deviceToMap(device: sample.device),
            "objects": objectsToMap(objects: sample.objects, unit: unit),
            "metadata": sample.metadata
            ]
    }

    func objectsToMap(objects: Set<HKSample>, unit: HKUnit) -> [[String: Any?]] {
        objects.map { sampleToMap(sample: $0, unit: unit) }.compactMap { $0 }
    }

    func quantitySampleToMap(sample: HKQuantitySample, unit: HKUnit) -> [String: Any?] {
        var result = [
            "sampleType": "quantity",
            "quantityType": quantityTypeToString(value: sample.quantityType),
            "quantity": sample.quantity.doubleValue(for: unit),
            "startDate": buildISO8601StringFromDate(sample.startDate),
            "endDate": buildISO8601StringFromDate(sample.endDate),
            "sourceRevision": sourceRevisionToMap(sourceRevision: sample.sourceRevision),
            "device": deviceToMap(device: sample.device),
            "metadata": sample.metadata
        ] as [String: Any?]
        
        if #available(iOS 12.0, *) {
            result["count"] = sample.count
        }
        
        return result
    }

    func sourceToMap(source: HKSource) -> Dictionary<String, Any> {
        [
            "name": source.name,
            "bundleIdentifier": source.bundleIdentifier
        ]
    }

    func sourceRevisionToMap(sourceRevision: HKSourceRevision) -> [String: Any?] {
        var result = [
            "source": sourceToMap(source: sourceRevision.source),
            "version": sourceRevision.version,
            ] as [String : Any?]
        
        if #available(iOS 11.0, *) {
            result["productType"] = sourceRevision.productType
            result["operatingSystemVersion"] = operatingSystemVersionToString(version: sourceRevision.operatingSystemVersion)
        }
        
        return result
    }

    func deviceToMap(device: HKDevice?) -> [String: Any?]? {
        if nil != device {
            return [
                "name": device?.name,
                "manufacturer": device?.manufacturer,
                "model": device?.model,
                "hardwareVersion": device?.hardwareVersion,
                "firmwareVersion": device?.firmwareVersion,
                "softwareVersion": device?.softwareVersion,
                "localIdentifier": device?.localIdentifier,
                "udiDeviceIdentifier": device?.udiDeviceIdentifier,
            ]
        }
        return nil
    }
}
