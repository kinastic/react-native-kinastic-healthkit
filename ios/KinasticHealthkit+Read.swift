//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    func parseSort(item: Any?) -> NSSortDescriptor? {
        if let sortData = item as? Dictionary {
            guard let key = item["key"] as? String else {
                print("Missing sort 'key'")
                return nil
            }

            let ascending = item["ascending"] ? Bool(item["ascending"]) ?? true : true

            return NSSortDescriptor(key: key, ascending: ascending)
        }
        return nil
    }

    func parseSortArray(value: Any?) -> [NSSortDescriptor]? {
        if let sortArrayRaw = value as? Array {
            sortArrayRaw.map { parseSort(item: $0) }
                    .compactMap { $0 }
        }
        return nil
    }


    @objc(querySample:reject:)
    func querySample(_ query: [String: Any?]) {
        guard let sampleType = getObjectTypeFromString(query["sampleType"]) else {
            reject("sampleType required")
            return
        }

        guard let startDate = parseStartDate(sample: query) else {
            reject("sampleType required")
            return
        }

        let limit = parseInt(sample: query["limit"])
        let endDate = parseEndDate(sample: query, withDefault: Date())
        let predicate = predicateForSamplesBetweenDates(startDate: startDate, endDate: endDate)
        let unit = parseUnit(sample: query)
        let sort = parseSortArray(value: query["sort"]) ?? [NSSortDescriptor(key: "startDate", ascending: true)]

        let query = HKSampleQuery(sampleType: sampleType, predicate: predicate, limit: limit, sortDescriptors: sort) { query, samples, error in
            if (error) {
                reject("Error: \(error?.localizedDescription)")
            } else if samples {
                let json = samples.map { sampleToMap(sample: $0, unit: unit) }
            } else {
                resolve([])
            }
        }

        self.healthKit.execute(query)
    }

    func sampleToMap(sample: HKSample, unit: HKUnit) -> Dictionary<String, Any?>? {
        if sample is HKQuantitySample {
            return quantitySampleToMap(sample: sample as HKQuantitySample, unit: unit)
        } else if sample is HKCorrelation {
            return correlationToMap(sample: sample as HKCorrelation, unit: unit)
        } else if sample is HKWorkout {
            return workoutToMap(sample: sample as HKWorkout, unit: unit)
        } else if sample is HKCategorySample {
            return categorySampleToMap(sample: sample)
        }
        return nil
    }

    func categorySampleToMap(sample: HKCategorySample) -> Dictionary<String, Any?> {
        [
            "sampleType": "category",
            "categoryType": sample.categoryType.identifier,
            "value": sample.value,
            "source": sourceToMap(source: sample.source),
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
            "source": sourceToMap(source: sample.source),
            "sourceRevision": sourceRevisionToMap(sourceRevision: sample.sourceRevision),
            "device": deviceToMap(device: sample.device),
            "workoutEvents": workoutEventsToMap(events: sample.workoutEvents),
            "metadata": sample.metadata
        ]
    }

    func workoutEventsToMap(events: [HKWorkoutEvent]) -> [Dictionary<String, Any?>] {
        events.map { workoutEventToMap(event: $0) }
    }

    func workoutEventToMap(event: HKWorkoutEvent) -> Dictionary<String, Any?> {
        [
            "type": workoutEventTypeString(workoutEvent: event.type),
            "date": buildISO8601StringFromDate(event.date),
            "startDate": buildISO8601StringFromDate(event.dateInterval.start),
            "endDate": buildISO8601StringFromDate(event.dateInterval.end),
            "duration": event.dateInterval.duration,
            "metadata": event.metadata
        ]
    }

    func correlationToMap(sample: HKCorrelation, unit: HKUnit) -> Dictionary<String, Any?> {
        [
            "sampleType": "correlation",
            "correlationType": correlationTypeToString(value: sample.correlationType),
            "startDate": buildISO8601StringFromDate(sample.startDate),
            "endDate": buildISO8601StringFromDate(sample.endDate),
            "source": sourceToMap(source: sample.source),
            "sourceRevision": sourceRevisionToMap(sourceRevision: sample.sourceRevision),
            "device": deviceToMap(device: sample.device),
            "objects": objectsToMap(objects: sample.objects, unit: unit),
            "metadata": sample.metadata
        ]
    }

    func objectsToMap(objects: Set<HKSample>, unit: HKUnit) -> [Dictionary<String, Any?>] {
        objects.map { sampleToMap(sample: $0, unit: unit) }
    }

    func quantitySampleToMap(sample: HKQuantitySample, unit: HKUnit) {
        return [
            "sampleType": "quantity",
            "quantityType": quantityTypeToString(value: sample.quantityType),
            "quantity": sample.quantity.doubleValue(for: unit),
            "startDate": buildISO8601StringFromDate(sample.startDate),
            "endDate": buildISO8601StringFromDate(sample.endDate),
            "count": sample.count,
            "source": sourceToMap(source: sample.source),
            "sourceRevision": sourceRevisionToMap(sourceRevision: sample.sourceRevision),
            "device": deviceToMap(device: sample.device),
            "metadata": sample.metadata
        ]
    }

    func sourceToMap(source: HKSource) -> Dictionary<String, Any?> {
        [
            "name": source.name,
            "bundleIdentifier": source.bundleIdentifier
        ]
    }

    func sourceRevisionToMap(sourceRevision: HKSourceRevision) -> Dictionary<String, Any?> {
        [
            "source": sourceToMap(source: sourceRevision.source),
            "version": sourceRevision.version,
            "productType": sourceRevision.productType,
            "operatingSystemVersion": operatingSystemVersionToString(version: sourceRevision.operatingSystemVersion)
        ]
    }

    func deviceToMap(device: HKDevice?) -> Dictionary<String, Any?>? {
        if nil != device {
            [
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