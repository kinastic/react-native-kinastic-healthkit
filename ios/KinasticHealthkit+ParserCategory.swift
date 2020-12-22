//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    func parseCategoryTypeIdentifier(sample: [String: Any]) -> HKCategoryTypeIdentifier? {
        if let value = sample["sampleType"] as? String {
            return self.getCategoryTypeIdentifierFromString(input: value)
        }
        return nil
    }

    func parseCategoryValue(type: HKCategoryTypeIdentifier, value: Any?) -> Int? {

        if #available(iOS 10.0, *) {
            if type == .mindfulSession {
                return parseMindfulSession(value: value)?.rawValue
            }
        }

        if #available(iOS 12.2, *) {
            if type == .lowHeartRateEvent {
                return parseLowHeartRateEvent(value: value)?.rawValue
            } else if type == .irregularHeartRhythmEvent {
                return parseIrregularHeartRhythmEvent(value: value)?.rawValue
            } else if type == .highHeartRateEvent {
                return parseHighHeartRateEvent(value: value)?.rawValue
            }
        } else {
            return nil
        }

        if #available(iOS 13.0, *) {
            if type == .audioExposureEvent {
                return parseAudioExposureEvent(value: value)?.rawValue
            } else if type == .toothbrushingEvent {
                return parseToothbrushingEvent(value: value)?.rawValue
            }
        }

        switch type {
        case .appleStandHour: return parseAppleStandHour(value: value)?.rawValue
        case .cervicalMucusQuality: return parseCervicalMucusQuality(value: value)?.rawValue
        case .intermenstrualBleeding: return parseIntermenstrualBleeding(value: value)?.rawValue
        case .menstrualFlow: return parseMenstrualFlow(value: value)?.rawValue
        case .ovulationTestResult: return parseOvulationTestResult(value: value)?.rawValue
        case .sexualActivity: return parseSexualActivity(value: value)?.rawValue
        case .sleepAnalysis: return parseSleepAnalysis(value: value)?.rawValue
        default: return nil
        }
    }

    func parseAppleStandHour(value: Any?) -> HKCategoryValueAppleStandHour? {
        if let input = value as? String {
            switch input {
            case "stood": return .stood
            case "idle": return .idle
            default: return nil
            }
        }
        return nil
    }

    @available(iOS 13.0, *)
    func parseAudioExposureEvent(value: Any?) -> HKCategoryValueAudioExposureEvent? {
        if let input = value as? String {
            switch input {
            case "loudEnvironment": return .loudEnvironment
            default: return nil
            }
        }
        return nil
    }

    func parseCervicalMucusQuality(value: Any?) -> HKCategoryValueCervicalMucusQuality? {
        if let input = value as? String {
            switch input {
            case "creamy": return .creamy
            case "dry": return .dry
            case "eggWhite": return .eggWhite
            case "sticky": return .sticky
            case "watery": return .watery
            default: return nil
            }
        }
        return nil
    }

    func parseHighHeartRateEvent(value: Any?) -> HKCategoryValue? {
        .notApplicable
    }

    func parseIntermenstrualBleeding(value: Any?) -> HKCategoryValue? {
        .notApplicable
    }

    func parseIrregularHeartRhythmEvent(value: Any?) -> HKCategoryValue? {
        .notApplicable
    }

    func parseLowHeartRateEvent(value: Any?) -> HKCategoryValue? {
        .notApplicable
    }

    func parseMenstrualFlow(value: Any?) -> HKCategoryValueMenstrualFlow? {
        if let input = value as? String {
            switch input {
            case "heavy": return .heavy
            case "light": return .light
            case "medium": return .medium
            case "none": if #available(iOS 12.0, *) {
                return HKCategoryValueMenstrualFlow.none
            } else {
                return .unspecified
            }
            case "unspecified": return .unspecified
            default: return nil
            }
        }
        return nil
    }

    func parseMindfulSession(value: Any?) -> HKCategoryValue? {
        .notApplicable
    }

    func parseOvulationTestResult(value: Any?) -> HKCategoryValueOvulationTestResult? {
        if let input = value as? String {
            switch input {
            case "estrogenSurge": if #available(iOS 13.0, *) {
                return .estrogenSurge
            } else {
                return .indeterminate
            }
            case "indeterminate": return .indeterminate
            case "luteinizingHormoneSurge": if #available(iOS 13.0, *) {
                return .luteinizingHormoneSurge
            } else {
                return .positive
            }
            case "negative": return .negative
            default: return nil
            }
        }
        return nil
    }

    func parseSexualActivity(value: Any?) -> HKCategoryValue? {
        .notApplicable
    }

    func parseSleepAnalysis(value: Any?) -> HKCategoryValueSleepAnalysis? {
        if let input = value as? String {
            switch input {
            case "asleep": return .asleep
            case "awake": if #available(iOS 10.0, *) {
                return .awake
            } else {
                return .inBed
            }
            case "inBed": return .inBed
            default: return nil
            }
        }
        return nil
    }

    func parseToothbrushingEvent(value: Any?) -> HKCategoryValue? {
        .notApplicable
    }

    func parseSampleCategory(sample: [String: Any]) -> HKCategorySample? {
        
        guard let typeIdentifier = parseCategoryTypeIdentifier(sample: sample) else {
            return nil
        }

        guard let type = HKCategoryType.categoryType(forIdentifier: typeIdentifier) else {
            return nil
        }

        guard let value = parseCategoryValue(type: typeIdentifier, value: sample["value"]) else {
            return nil
        }

        guard let startDate = parseStartDate(sample: sample) else {
            return nil
        }

        guard var endDate = self.parseISO8601DateFromString(sample["endDate"] as? String, withDefault: startDate) else {
            print("Weird error happened")
            return nil
        }

        if startDate > endDate {
            endDate = startDate
        }
        
        if (endDate.timeIntervalSince1970 - startDate.timeIntervalSince1970 >= 345600.000000) {
            return nil
        }

        let device = parseDevice(sample["device"])
        let metadata = sample["metadata"] as? [String: Any]

        return HKCategorySample(type: type, value: value, start: startDate, end: endDate, device: device, metadata: metadata)
    }
}
