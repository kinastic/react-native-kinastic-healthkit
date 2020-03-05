//
//  KinasticHealthkit+ParserPredicate.swift
//  DoubleConversion
//
//  Created by neo on 29.02.20.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    func parsePredicates(queryParams: [String: Any?]) -> [HKSampleType: NSPredicate]? {
        if let data = queryParams["samplePredicates"] as? [String: Any?] {
            var result = Dictionary<HKSampleType, NSPredicate>()
            data.forEach {
                if let key = getSampleTypeFromString(perm: $0.key), let predicateData = $0.value as? [String: Any?] {
                    if let predicate = parsePredicate(data: predicateData) {
                        result[key] = predicate
                    }
                }
            }
            return result
        }
        return nil
    }

    func parsePredicate(data: [String: Any?]?) -> NSPredicate? {
        if let predicateData = data {
            guard let type = predicateData["type"] as? String else {
                print("predicate.type missing")
                return nil
            }

            switch type {
            case "categorySamples": return predicateForCategorySamples(data: predicateData)
            case "clinicalRecords": if #available(iOS 12.0, *) {
                return predicateForClinicalRecords(data: predicateData)
            } else {
                return nil
            }
            case "object": return predicateForObject(data: predicateData)
            case "objects": return predicateForObjects(data: predicateData)
            case "objectsWithNoCorrelation": return HKQuery.predicateForObjectsWithNoCorrelation()
            case "quantitySamples": return predicateForQuantitySamples(data: predicateData)
            case "samples": return predicateForSamples(data: predicateData)
            case "workouts": return predicateForWorkouts(data: predicateData)
            default: return nil
            }
        }
        return nil
    }
    
    func predicateForObjectsWorkout(workoutUuid: String, completion: @escaping (_: NSPredicate?) -> Void) {
        queryByUUID(sampleType: .workoutType(), uuid: workoutUuid) { (sample) in
            if let workout = sample as? HKWorkout {
                completion(HKQuery.predicateForObjects(from: workout))
            } else {
                completion(nil)
            }
        }
    }

    func predicateForObjects(data: [String: Any?]) -> NSPredicate? {

        if let workoutData = data["workout"] as? [String: Any?] {
            // TODO not supported
            if let workout = parseSampleWorkout(sample: workoutData) {
                return HKQuery.predicateForObjects(from: workout)
            }
        }

        if let deviceData = data["device"] as? [String: Any?] {
            if let device = parseDevice(deviceData) {
                return HKQuery.predicateForObjects(from: [device])
            }
        }

        if let deviceData = data["device"] as? [Any] {
            let devices = parseDevices(input: deviceData)
            if !devices.isEmpty {
                return HKQuery.predicateForObjects(from: devices)
            }
        } else if let deviceData = data["devices"] as? [Any] {
            let devices = parseDevices(input: deviceData)
            if !devices.isEmpty {
                return HKQuery.predicateForObjects(from: devices)
            }
        }

        if let sourceRevData = data["sourceRevisions"] as? [Any] {
            let sourceRevisions = parseSourceRevisions(input: sourceRevData)
            if !sourceRevisions.isEmpty {
                return HKQuery.predicateForObjects(from: sourceRevisions)
            }
        }

        if let uuidData = data["uuids"] as? [String] {
            let uuids = Set(uuidData.map {
                UUID(uuidString: $0)
            }.compactMap {
                $0
            })
            if !uuids.isEmpty {
                return HKQuery.predicateForObjects(with: uuids)
            }
        }

        if let deviceProperty = data["deviceProperty"] as? String, let allowedValues = data["allowedValues"] as? [String] {
            if !allowedValues.isEmpty {
                return HKQuery.predicateForObjects(withDeviceProperty: deviceProperty, allowedValues: Set(allowedValues))
            }
        }

        if let metadataKey = data["metadataKey"] as? String {
            if let operatorType = parseOperator(data: data["operator"] as? String), let value = data["value"] {
                return HKQuery.predicateForObjects(withMetadataKey: metadataKey, operatorType: operatorType, value: value)
            } else if let allowedValues = data["allowedValues"] as? [Any] {
                return HKQuery.predicateForObjects(withMetadataKey: metadataKey, allowedValues: allowedValues)
            }
            return HKQuery.predicateForObjects(withMetadataKey: metadataKey)
        }
        return nil
    }

    func predicateForObject(data: [String: Any?]) -> NSPredicate? {
        if let uuidString = data["uuid"] as? String {
            if let uuid = UUID.init(uuidString: uuidString) {
                return HKQuery.predicateForObject(with: uuid)
            }
        }
        return nil
    }

    func parseOperator(data: String?) -> NSComparisonPredicate.Operator? {
        if let input = data {
            switch input {
            case "beginsWith": return .beginsWith
            case "between": return .between
            case "contains": return .contains
            case "customSelector": return .customSelector
            case "endsWith": return .endsWith
            case "equalTo", "eq": return .equalTo
            case "greaterThan", "gt": return .greaterThan
            case "greaterThanOrEqualTo", "gte": return .greaterThanOrEqualTo
            case "in": return .in
            case "lessThan", "lt": return .lessThan
            case "lessThanOrEqualTo", "lte": return .lessThanOrEqualTo
            case "like": return .like
            case "matches": return .matches
            case "notEqualTo": return .notEqualTo
            default: return nil
            }
        }
        return nil
    }

    func predicateForCategorySamples(data: [String: Any?]) -> NSPredicate? {
        guard let opString = data["operator"] as? String else {
            print("predicate.operator missing")
            return nil
        }

        guard let op = parseOperator(data: opString) else {
            print("predicate.operator missing")
            return nil
        }

        guard let value = data["value"] as? Int else {
            print("predicate.value missing")
            return nil
        }

        return HKQuery.predicateForCategorySamples(with: op, value: value)
    }

    @available(iOS 12.0, *)
    func predicateForClinicalRecords(data: [String: Any?]) -> NSPredicate? {

        guard let fhirResourceType = parsefhirResourceType(data: data["fhirResourceType"] as? String) else {
            print("predicate.fhirResourceType missing")
            return nil
        }

        if let source = parseSource(data: data["source"] as? [String: Any?]), let identifier = data["identifier"] as? String {
            return HKQuery.predicateForClinicalRecords(from: source, fhirResourceType: fhirResourceType, identifier: identifier)
        }

        return HKQuery.predicateForClinicalRecords(withFHIRResourceType: fhirResourceType)

    }

    func predicateForQuantitySamples(data: [String: Any?]) -> NSPredicate? {

        guard let op = parseOperator(data: data["operator"] as? String) else {
            print("operator missing")
            return nil
        }

        guard let quantity = parseQuantity(input: data) else {
            print("quantity missing")
            return nil
        }

        return HKQuery.predicateForQuantitySamples(with: op, quantity: quantity)
    }

    func predicateForSamples(data: [String: Any?]) -> NSPredicate? {

        let start = parseStartDate(sample: data)
        let end = parseEndDate(sample: data, withDefault: Date())
        let options = parseOptions(input: data["options"] as? String)
        return HKQuery.predicateForSamples(withStart: start, end: end, options: options)
    }

    func predicateForWorkouts(data: [String: Any?]) -> NSPredicate? {

        if let activityType = parseActivityType(sample: data) {
            return HKQuery.predicateForWorkouts(with: activityType)
        }

        if let op = parseOperator(data: data["operator"] as? String) {
            if let duration = parseTimeInterval(input: data["duration"]) {
                return HKQuery.predicateForWorkouts(with: op, duration: duration)
            } else if let quantityData = data["totalDistance"] as? Double {
                return HKQuery.predicateForWorkouts(with: op, totalDistance: HKQuantity(unit: .meter(), doubleValue: quantityData))
            } else if let quantityData = data["totalEnergyBurned"] as? Double {
                return HKQuery.predicateForWorkouts(with: op, totalEnergyBurned: HKQuantity(unit: .kilocalorie(), doubleValue: quantityData))
            } else if let quantityData = data["totalSwimmingStrokeCount"] as? Double {
                return HKQuery.predicateForWorkouts(with: op, totalSwimmingStrokeCount: HKQuantity(unit: .count(), doubleValue: quantityData))
            }

            if #available(iOS 11.0, *) {
                if let quantityData = data["totalFlightsClimbed"] as? Double {
                    return HKQuery.predicateForWorkouts(with: op, totalFlightsClimbed: HKQuantity(unit: .count(), doubleValue: quantityData))
                }
            }
        }

        return nil
    }

    func parseTimeInterval(input: Any?) -> TimeInterval? {
        if let duration = input as? Double {
            return TimeInterval(duration)
        } else if let duration = input as? String {
            if let value = Double(duration) {
                return TimeInterval(value)
            } else if let value = Int64(duration) {
                return TimeInterval(value)
            }
        } else if let duration = input as? Int64 {
            return TimeInterval(duration)
        }
        return nil
    }

    func parseOptions(input: String?) -> HKQueryOptions {
        switch input {
        case "strictEndDate": return .strictEndDate
        case "strictStartDate": return .strictStartDate
        default: return .strictStartDate
        }
    }

    func parseSourceRevisions(input: [Any]) -> Set<HKSourceRevision> {
        var result = Set<HKSourceRevision>()
        input.forEach {
            if let data = $0 as? [String: Any?] {
                if let rev = parseSourceRevision(input: data) {
                    result.insert(rev)
                }
            }
        }
        return Set(result)
    }

    func parseSourceRevision(input: [String: Any?]) -> HKSourceRevision? {
        if let sourceData = input["source"] as? [String: Any?] {
            if let source = parseSource(data: sourceData) {
                let version = input["version"] as? String
                let productType = input["productType"] as? String

                if #available(iOS 11.0, *) {
                    if let osVersion = parseOSVersion(from: input["operatingSystemVersion"] as? String) {
                        return HKSourceRevision(source: source, version: version, productType: productType, operatingSystemVersion: osVersion)
                    }
                    return HKSourceRevision(source: source, version: version)
                }
            }
        }
        return nil
    }

    func parseOSVersion(from: String?) -> OperatingSystemVersion? {
        if let input = from {
            let splits = input.split(separator: ".")
            if let major = Int(splits[0]) {
                let minor = splits.count > 1 ? Int(splits[1]) ?? 0 : 0
                let patch = splits.count > 2 ? Int(splits[2]) ?? 0 : 0

                return OperatingSystemVersion(majorVersion: major, minorVersion: minor, patchVersion: patch)
            }
        }
        return nil
    }

    /**
        Not supported yet
     */
    func parseSource(data: [String: Any?]?) -> HKSource? {
        if let input = data {
            return nil
        }
        return nil
    }

    @available(iOS 12.0, *)
    func parsefhirResourceType(data: Any?) -> HKFHIRResourceType? {
        if let input = data as? String {
            switch input {
            case "allergyIntolerance": return .allergyIntolerance
            case "condition": return .condition
            case "immunization": return .immunization
            case "medicationDispense": return .medicationDispense
            case "medicationOrder": return .medicationOrder
            case "medicationStatement": return .medicationStatement
            case "observation": return .observation
            case "procedure": return .procedure
            default: return nil
            }
        }
        return nil
    }
}
