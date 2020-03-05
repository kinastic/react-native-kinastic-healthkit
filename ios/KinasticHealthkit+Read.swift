//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit
import CoreLocation

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
            return sortArrayRaw.map {
                        parseSort(item: $0)
                    }
                    .compactMap {
                        $0
                    }
        }
        return nil
    }


    @objc(querySample:resolve:reject:)
    func querySample(_ query: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {

        guard let typeString = query["sampleType"] as? String else {
            reject("format", "sampleType required", nil)
            return
        }

        guard let sampleType = getSampleTypeFromString(perm: typeString) else {
            reject("format", "invalid type", nil)
            return
        }

        let limit = query["limit"] as? Int ?? HKObjectQueryNoLimit
        let predicate = parsePredicate(data: query["predicate"] as? [String: Any?])

        let sort = parseSortArray(value: query["sort"]) ?? [NSSortDescriptor(key: "startDate", ascending: true)]

        let query = HKSampleQuery(sampleType: sampleType, predicate: predicate, limit: limit, sortDescriptors: sort) { query, samples, error in
            if nil != error {
                reject("error", "Error: \(error?.localizedDescription)", error)
            } else if let data = samples {
                let json = data.map {
                    self.sampleToMap(sample: $0)
                }
                
                resolve(json)
            } else {
                resolve([])
            }
        }

        self.healthKit.execute(query)
    }
    
    @objc(querySampleByWorkout:resolve:reject:)
    func querySampleByWorkout(_ query: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {

        guard let typeString = query["sampleType"] as? String, let sampleType = getSampleTypeFromString(perm: typeString) else {
            reject("format", "sampleType required", nil)
            return
        }
        
        guard let workoutUuid = query["workoutUuid"] as? String else {
            reject("format", "workoutUuid missing", nil)
            return
        }

        let limit = query["limit"] as? Int ?? HKObjectQueryNoLimit
        
        predicateForObjectsWorkout(workoutUuid: workoutUuid) { (predicate) in
            guard let predicate = predicate else {
                reject("notFound", "workout with \(workoutUuid) not found", nil)
                return
            }
         
            let sort = self.parseSortArray(value: query["sort"]) ?? [NSSortDescriptor(key: "startDate", ascending: true)]

            let query = HKSampleQuery(sampleType: sampleType, predicate: predicate, limit: limit, sortDescriptors: sort) { query, samples, error in
                if nil != error {
                    reject("error", "Error: \(error?.localizedDescription)", error)
                } else if let data = samples {
                    let json = data.map {
                        self.sampleToMap(sample: $0)
                    }
                    
                    resolve(json)
                } else {
                    resolve([])
                }
            }

            self.healthKit.execute(query)
        }
    }

    @objc(queryCorrelation:resolve:reject:)
    func queryCorrelation(_ query: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {

        guard let typeString = query["sampleType"] as? String else {
            reject("format", "sampleType required", nil)
            return
        }

        guard let sampleType = getCorrelationTypeFromString(input: typeString) else {
            reject("format", "invalid type", nil)
            return
        }
        
        let predicate = parsePredicate(data: query["predicate"] as? [String: Any?])
        let samplePredicates = parsePredicates(queryParams: query)
        
        let query = HKCorrelationQuery(type: sampleType, predicate: predicate, samplePredicates: samplePredicates) { query, samples, error in
            if nil != error {
                reject("error", "Error: \(error?.localizedDescription)", error)
            } else if let data = samples {
                let json = data.map {
                    self.sampleToMap(sample: $0)
                }
                resolve(json)
            } else {
                resolve([])
            }
        }

        self.healthKit.execute(query)
    }
    
    @objc(queryDocument:resolve:reject:)
    func queryDocument(_ query: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        if #available(iOS 10.0, *) {
            guard let typeString = query["sampleType"] as? String else {
                reject("format", "type required", nil)
                return
            }

            guard let sampleType = getDocumentTypeFromString(input: typeString) else {
                reject("format", "invalid type", nil)
                return
            }
            
            let limit = query["limit"] as? Int ?? HKObjectQueryNoLimit
            let predicate = parsePredicate(data: query["predicate"] as? [String: Any?])
            let includeDocumentData = query["includeDocumentData"] as? Bool ?? false
            let sort = parseSortArray(value: query["sort"]) ?? [NSSortDescriptor(key: "startDate", ascending: true)]
            
            var allDocuments: [HKDocumentSample] = []
            
            let query = HKDocumentQuery(documentType: sampleType, predicate: predicate, limit: limit, sortDescriptors: sort, includeDocumentData: includeDocumentData) { (query, documents, done, error) in
                if nil != error {
                    reject("error", "Error: \(error?.localizedDescription)", error)
                }
                if let data = documents {
                    allDocuments += data
                }
                
                if done {
                    let json = allDocuments.map {
                        self.sampleToMap(sample: $0)
                    }
                    resolve(json)
                }
            }

            self.healthKit.execute(query)
        } else {
            reject("unavailable", "iOS >= 10.0 required", nil)
        }
    }
    
    @objc(queryAnchored:resolve:reject:)
    func queryAnchored(_ query: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {

        guard let typeString = query["sampleType"] as? String else {
            reject("format", "type required", nil)
            return
        }

        guard let sampleType = getSampleTypeFromString(perm: typeString) else {
            reject("format", "invalid type", nil)
            return
        }
        
        let anchor = parseAnchor(data: query["anchor"])
        let predicate = parsePredicate(data: query["predicate"] as? [String: Any?])
        let limit = query["limit"] as? Int ?? HKObjectQueryNoLimit
    
        let query = HKAnchoredObjectQuery(type: sampleType, predicate: predicate, anchor: anchor, limit: limit) { (query, samples, deleted, anchor, error) in
            if nil != error {
                reject("error", "Error: \(error?.localizedDescription)", error)
            } else {
                let newSamples = samples?.map {
                    self.sampleToMap(sample: $0)
                }
                let deletedObjects = deleted?.map {
                    self.deletedObjectToMap(object: $0)
                } ?? []
                
                let json = [
                    "samples": newSamples,
                    "deleted": deletedObjects,
                    "anchor": anchor
                ] as [String: Any?]
                
                resolve(json)
            }
        }

        self.healthKit.execute(query)
    }
    
    @objc(querySource:resolve:reject:)
    func querySource(_ query: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {

        guard let typeString = query["sampleType"] as? String else {
            reject("format", "sampleType required", nil)
            return
        }

        guard let sampleType = getSampleTypeFromString(perm: typeString) else {
            reject("format", "invalid type", nil)
            return
        }

        let predicate = parsePredicate(data: query["predicate"] as? [String: Any?])

        let sort = parseSortArray(value: query["sort"]) ?? [NSSortDescriptor(key: "startDate", ascending: true)]

        let query = HKSourceQuery(sampleType: sampleType, samplePredicate: predicate) { (query, sources, error) in
            if nil != error {
                reject("error", "Error: \(error?.localizedDescription)", error)
            } else if let data = sources {
                let json = data.map {
                    self.sourceToMap(source: $0)
                }
                
                resolve(json)
            } else {
                resolve([])
            }
        }

        self.healthKit.execute(query)
    }
    
    @objc(queryWorkoutRoute:resolve:reject:)
    func queryWorkoutRoute(_ queryParams: [String: Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        
        if #available(iOS 11.0, *) {
            guard let uuidString = queryParams["uuid"] as? String else {
                reject("format", "missing 'uuid' of HKWorkout", nil)
                return
            }
            
            queryByUUID(sampleType: .workoutType(), uuid: uuidString) { (sample) in
                guard let workout = sample as? HKWorkout else {
                    resolve([])
                    return
                }
                
                let predicate = HKQuery.predicateForObjects(from: workout)
                
                let sort = [NSSortDescriptor(key: HKSampleSortIdentifierStartDate, ascending: true)]
                let query = HKSampleQuery(sampleType: HKSeriesType.workoutRoute(), predicate: predicate, limit: 1, sortDescriptors: sort) { (query, samples, error) in
                    guard error == nil else {
                        reject("error", error?.localizedDescription, error)
                        return
                    }
                    
                    guard let samples = samples, samples.count > 0 else {
                        resolve([])
                        return
                    }
                    
                    let first = samples[0]
                    if let routeSample = first as? HKWorkoutRoute {
                        self.queryWorkoutRoute(route: routeSample, resolve: resolve, reject: reject)
                    }
                }
                self.healthKit.execute(query)
            }
        } else {
            reject("unavailable", "iOS >= 11.0", nil)
        }
    }

    @objc(enableBackgroundDelivery:frequency:resolve:reject:)
    func enableBackgroundDelivery(_ objectType: String, frequency: String?, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        guard let objectType = getObjectTypeFromString(objectType) else {
            reject("format", "invalid objectType", nil)
            return
        }

        guard let frequency = getFrequencyFromString(frequency) else {
            reject("format", "invalid frequency", nil)
            return
        }

        healthKit.enableBackgroundDelivery(for: objectType, frequency: frequency) { b, error in
            guard error == nil else {
                reject("error", error?.localizedDescription, error)
                return
            }

            resolve("success")
        }
    }

    @objc(disableBackgroundDelivery:resolve:reject:)
    func disableBackgroundDelivery(_ objectType: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        guard let objectType = getObjectTypeFromString(objectType) else {
            reject("format", "invalid objectType", nil)
            return
        }

        healthKit.disableBackgroundDelivery(for: objectType) { b, error in
            guard error == nil else {
                reject("error", error?.localizedDescription, error)
                return
            }

            resolve("success")
        }
    }

    @objc(disableAllBackgroundDelivery:reject:)
    func disableAllBackgroundDelivery(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        healthKit.disableAllBackgroundDelivery { b, error in
            guard error == nil else {
                reject("error", error?.localizedDescription, error)
                return
            }

            resolve("success")
        }
    }
    
    @available(iOS 11.0, *)
    func queryWorkoutRoute(route: HKWorkoutRoute, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        var allLocations: [CLLocation] = []
        
        let query = HKWorkoutRouteQuery(route: route) { (query: HKWorkoutRouteQuery, locations: [CLLocation]?, done: Bool, error: Error?) in
            if nil != error {
                reject("error", error?.localizedDescription, error)
            } else {
                if let data = locations {
                    allLocations += data
                }
                
                if done {
                    let json = allLocations.map { self.locationToJson(location: $0) }
                    resolve(json)
                }
            }
        }
        
        self.healthKit.execute(query)
    }
    
    func queryByUUID(sampleType: HKSampleType, uuid: String, completion: @escaping (_: HKSample?) -> Void) {
        guard let uuid = UUID(uuidString: uuid) else {
            return
        }
        
        queryByUUID(sampleType: sampleType, uuid: uuid, completion: completion)
    }
    
    func queryByUUID(sampleType: HKSampleType, uuid: UUID, completion: @escaping (_: HKSample?) -> Void) {
        let predicate = HKQuery.predicateForObject(with: uuid)
        let query = HKSampleQuery(sampleType: sampleType, predicate: predicate, limit: 1, sortDescriptors: nil) { (query, samples, error) in
            if let samples = samples, samples.count > 0  {
                completion(samples[0])
            } else {
                completion(nil)
            }
        }
        
        self.healthKit.execute(query)
    }
    
    func parseAnchor(data: Any?) -> HKQueryAnchor? {
        if let value = data as? Int {
            return HKQueryAnchor(fromValue: value)
        }
        return nil
    }

    func determineUnit(type: HKQuantityType) -> HKUnit? {
        if let identifier = getQuantityTypeIdentifierFromString(type: quantityTypeToString(value: type)) {
            return determineUnit(type: identifier)
        }
        return nil
    }

    func determineUnit(type: HKQuantityTypeIdentifier) -> HKUnit? {

        if #available(iOS 9.3, *) {
            if type == .appleExerciseTime {
                return .minute()
            }
        }

        if #available(iOS 10.0, *) {
            if type == .pushCount || type == .swimmingStrokeCount {
                return .count()
            } else if type == .distanceSwimming || type == .distanceWheelchair {
                return .meter()
            }
        }

        if #available(iOS 11.0, *) {

            if type == .heartRateVariabilitySDNN {
                return .secondUnit(with: .milli)
            } else if type == .insulinDelivery {
                return .internationalUnit()
            } else if type == .restingHeartRate {
                return HKUnit.count().unitDivided(by: HKUnit.minute())
            } else if type == .vo2Max {
                return HKUnit.literUnit(with: .milli).unitDivided(by: HKUnit.gramUnit(with: .kilo).unitMultiplied(by: .minute()))
            } else if type == .waistCircumference {
                return .meterUnit(with: .centi)
            } else if type == .walkingHeartRateAverage {
                return HKUnit.count().unitDivided(by: HKUnit.minute())
            }
        }

        if #available(iOS 11.2, *) {
            if type == .distanceDownhillSnowSports {
                return .meter()
            }
        }

        if #available(iOS 13.0, *) {
            if type == .appleStandTime {
                return .minute()
            } else if type == .environmentalAudioExposure {
                return .decibelHearingLevel()
            } else if type == .headphoneAudioExposure {
                return .decibelHearingLevel()
            }
        }

        switch type {
        case .activeEnergyBurned: return .kilocalorie()
        case .basalBodyTemperature: return .degreeCelsius()
        case .basalEnergyBurned: return .kilocalorie()
        case .bloodAlcoholContent: return .percent()
        case .bloodGlucose: return HKUnit.gramUnit(with: .milli).unitDivided(by: HKUnit.literUnit(with: .deci))
        case .bloodPressureDiastolic: return .millimeterOfMercury()
        case .bloodPressureSystolic: return .millimeterOfMercury()
        case .bodyFatPercentage: return .percent()
        case .bodyMass: return .gramUnit(with: .kilo)
        case .bodyMassIndex: return HKUnit(from: .kilogram)
        case .bodyTemperature: return .degreeCelsius()
        case .dietaryBiotin: return .gramUnit(with: .milli)
        case .dietaryCaffeine: return .gramUnit(with: .milli)
        case .dietaryCalcium: return .gramUnit(with: .milli)
        case .dietaryCarbohydrates: return .gramUnit(with: .milli)
        case .dietaryChloride: return .gramUnit(with: .milli)
        case .dietaryCholesterol: return .gramUnit(with: .milli)
        case .dietaryChromium: return .gramUnit(with: .milli)
        case .dietaryCopper: return .gramUnit(with: .milli)
        case .dietaryEnergyConsumed: return .kilocalorie()
        case .dietaryFatMonounsaturated: return .gram()
        case .dietaryFatPolyunsaturated: return .gram()
        case .dietaryFatSaturated: return .gram()
        case .dietaryFatTotal: return .gram()
        case .dietaryFiber: return .gram()
        case .dietaryFolate: return .gramUnit(with: .milli)
        case .dietaryIodine: return .gramUnit(with: .milli)
        case .dietaryIron: return .gramUnit(with: .milli)
        case .dietaryMagnesium: return .gramUnit(with: .milli)
        case .dietaryManganese: return .gramUnit(with: .milli)
        case .dietaryMolybdenum: return .gramUnit(with: .milli)
        case .dietaryNiacin: return .gramUnit(with: .milli)
        case .dietaryPantothenicAcid: return .gramUnit(with: .milli)
        case .dietaryPhosphorus: return .gramUnit(with: .milli)
        case .dietaryPotassium: return .gramUnit(with: .milli)
        case .dietaryProtein: return .gram()
        case .dietaryRiboflavin: return .gramUnit(with: .milli)
        case .dietarySelenium: return .gramUnit(with: .milli)
        case .dietarySodium: return .gramUnit(with: .milli)
        case .dietarySugar: return .gram()
        case .dietaryThiamin: return .gramUnit(with: .milli)
        case .dietaryVitaminA: return .gramUnit(with: .milli)
        case .dietaryVitaminB6: return .gramUnit(with: .milli)
        case .dietaryVitaminB12: return .gramUnit(with: .milli)
        case .dietaryVitaminC: return .gramUnit(with: .milli)
        case .dietaryVitaminD: return .gramUnit(with: .milli)
        case .dietaryVitaminE: return .gramUnit(with: .milli)
        case .dietaryVitaminK: return .gramUnit(with: .milli)
        case .dietaryWater: return .liter()
        case .dietaryZinc: return .gramUnit(with: .milli)
        case .distanceCycling: return .meter()
        case .distanceWalkingRunning: return .meter()
        case .electrodermalActivity: return .siemen()
        case .flightsClimbed: return .count()
        case .forcedExpiratoryVolume1: return .liter()
        case .forcedVitalCapacity: return .liter()
        case .heartRate: return HKUnit.count().unitDivided(by: HKUnit.minute())
        case .height: return .meter()
        case .inhalerUsage: return .count()
        case .leanBodyMass: return .gramUnit(with: .kilo)
        case .nikeFuel: return .count()
        case .numberOfTimesFallen: return .count()
        case .oxygenSaturation: return .percent()
        case .peakExpiratoryFlowRate: return HKUnit.liter().unitDivided(by: HKUnit.minute())
        case .peripheralPerfusionIndex: return .percent()
        case .respiratoryRate: return HKUnit.count().unitDivided(by: HKUnit.minute())
        case .stepCount: return .count()
        case .uvExposure: return .count()

        default: return nil
        }
    }
    
    func locationToJson(location: CLLocation) -> [String: Any?] {
        return [
            "alt": location.altitude,
            "lat": location.coordinate.latitude,
            "lon": location.coordinate.longitude,
            "speed": location.speed,
            "course": location.course,
            "time": buildISO8601StringFromDate(location.timestamp)
        ]
    }
    
    func deletedObjectToMap(object: HKDeletedObject) -> [String: Any?]? {
        var result =  [
            "uuid": object.uuid.uuidString
        ] as [String: Any?]

        if #available(iOS 11.0, *) {
            result["metadata"] = object.metadata
        }

        return result
    }

    func sampleToMap(sample: HKSample) -> [String: Any?]? {
        if sample is HKQuantitySample {
            return quantitySampleToMap(sample: sample as! HKQuantitySample)
        } else if sample is HKCorrelation {
            return correlationToMap(sample: sample as! HKCorrelation)
        } else if sample is HKWorkout {
            return workoutToMap(sample: sample as! HKWorkout)
        } else if sample is HKCategorySample {
            return categorySampleToMap(sample: sample as! HKCategorySample)
        }
        
        if #available(iOS 10.0, *) {
            if sample is HKDocumentSample {
                return documentSampleToMap(sample: sample as! HKDocumentSample)
            }
        }
        
        return nil
    }
    
    @available(iOS 10.0, *)
    func documentSampleToMap(sample: HKDocumentSample) -> [String: Any?] {
        return [
            "uuid": sample.uuid.uuidString,
            "entityType": "document",
            "sampleType": sample.documentType.identifier,
            "sourceRevision": sourceRevisionToMap(sourceRevision: sample.sourceRevision),
            "device": deviceToMap(data: sample.device),
            "metadata": sample.metadata,
        ]
    }

    func categorySampleToMap(sample: HKCategorySample) -> [String: Any?] {
        [
            "uuid": sample.uuid.uuidString,
            "entityType": "category",
            "sampleType": sample.categoryType.identifier,
            "value": sample.value,
            "sourceRevision": sourceRevisionToMap(sourceRevision: sample.sourceRevision),
            "device": deviceToMap(data: sample.device),
            "metadata": sample.metadata,
        ]
    }

    func workoutToMap(sample: HKWorkout) -> [String: Any?] {
        var result = [
            "uuid": sample.uuid.uuidString,
            "entityType": "workout",
            "activityType": stringFromWorkoutActivityType(input: sample.workoutActivityType),
            "startDate": buildISO8601StringFromDate(sample.startDate),
            "endDate": buildISO8601StringFromDate(sample.endDate),
            "sourceRevision": sourceRevisionToMap(sourceRevision: sample.sourceRevision),
            "device": deviceToMap(data: sample.device),
            "workoutEvents": workoutEventsToMap(events: sample.workoutEvents) ?? [],
            "totalEnergyBurned": sample.totalEnergyBurned?.doubleValue(for: .kilocalorie()),
            "metadata": sample.metadata
        ] as [String: Any?]

        if let totalDistance = sample.totalDistance {
            result["totalDistance"] = totalDistance.doubleValue(for: .meter())
        }

        if #available(iOS 11.0, *) {
            if let totalFlightsClimbed = sample.totalFlightsClimbed {
                result["totalFlightsClimbed"] = totalFlightsClimbed.doubleValue(for: .count())
            }
        }

        if #available(iOS 10.0, *) {
            if let totalSwimmingStrokeCount = sample.totalSwimmingStrokeCount {
                result["totalSwimmingStrokeCount"] = totalSwimmingStrokeCount.doubleValue(for: .count())
            }
        }

        return result
    }

    func workoutEventsToMap(events: [HKWorkoutEvent]?) -> [[String: Any?]]? {
        events?.map {
            workoutEventToMap(event: $0)
        }
    }

    func workoutEventToMap(event: HKWorkoutEvent) -> [String: Any?] {
        var result = [
            "type": workoutEventTypeString(workoutEvent: event.type),
            "date": buildISO8601StringFromDate(event.date),
        ] as [String: Any?]

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

    func correlationToMap(sample: HKCorrelation) -> [String: Any?] {
        [
            "uuid": sample.uuid.uuidString,
            "entityType": "correlation",
            "sampleType": correlationTypeToString(value: sample.correlationType),
            "startDate": buildISO8601StringFromDate(sample.startDate),
            "endDate": buildISO8601StringFromDate(sample.endDate),
            "sourceRevision": sourceRevisionToMap(sourceRevision: sample.sourceRevision),
            "device": deviceToMap(data: sample.device),
            "objects": objectsToMap(objects: sample.objects),
            "metadata": sample.metadata
        ]
    }

    func objectsToMap(objects: Set<HKSample>) -> [[String: Any?]] {
        objects.map {
            sampleToMap(sample: $0)
        }.compactMap {
            $0
        }
    }

    func quantitySampleValue(sample: HKQuantitySample, unit: HKUnit?) -> Double? {
        if let input = unit {
            if sample.quantityType.is(compatibleWith: input) {
                return sample.quantity.doubleValue(for: input)
            }
            print("Incompatible unit \(unit) for \(sample.quantityType.identifier)")
        }
        return nil
    }

    func quantitySampleToMap(sample: HKQuantitySample) -> [String: Any?]? {
        let unit = determineUnit(type: sample.quantityType)
        let value = quantitySampleValue(sample: sample, unit: unit)
        
        var result = [
            "uuid": sample.uuid.uuidString,
            "entityType": "quantity",
            "sampleType": sampleTypeToString(value: sample.sampleType),
            "value": value,
            "unit": unitString(unit: unit),
            "startDate": buildISO8601StringFromDate(sample.startDate),
            "endDate": buildISO8601StringFromDate(sample.endDate),
            "sourceRevision": sourceRevisionToMap(sourceRevision: sample.sourceRevision),
            "device": deviceToMap(data: sample.device),
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
        ] as [String: Any?]

        if #available(iOS 11.0, *) {
            result["productType"] = sourceRevision.productType
            result["operatingSystemVersion"] = operatingSystemVersionToString(version: sourceRevision.operatingSystemVersion)
        }

        return result
    }

    func deviceToMap(data: HKDevice?) -> [String: Any?]? {
        if let device = data {
            return [
                "name": device.name,
                "manufacturer": device.manufacturer,
                "model": device.model,
                "hardwareVersion": device.hardwareVersion,
                "firmwareVersion": device.firmwareVersion,
                "softwareVersion": device.softwareVersion,
                "localIdentifier": device.localIdentifier,
                "udiDeviceIdentifier": device.udiDeviceIdentifier,
            ]
        }
        return nil
    }
}
