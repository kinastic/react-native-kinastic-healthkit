//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    func parseCategoryType(sample: [String: Any?]) -> HKCategoryType? {
        guard self.getCategoryTypeFromString(input: sample["categoryType"]) else {
            print("Invalid 'categoryType' from HKCategoryType")
            return nil
        }
    }

    func parseCategoryValue(type: HKCategoryTypeIdentifier, value: Any?) -> Int? {
        switch type {
        case .appleStandHour: parseAppleStandHour(value: value)
        case .audioExposureEvent: parseAudioExposureEvent(value: value)
        case .cervicalMucusQuality: parseCervicalMucusQuality(value: value)
        case .highHeartRateEvent: parseHighHeartRateEvent(value: value)
        case .intermenstrualBleeding: parseIntermenstrualBleeding(value: value)
        case .irregularHeartRhythmEvent: parseIrregularHeartRhythmEvent(value: value)
        case .lowHeartRateEvent: parseLowHeartRateEvent(value: value)
        case .menstrualFlow: parseMenstrualFlow(value: value)
        case .mindfulSession: parseMindfulSession(value: value)
        case .ovulationTestResult: parseOvulationTestResult(value: value)
        case .sexualActivity: parseSexualActivity(value: value)
        case .sleepAnalysis: parseSleepAnalysis(value: value)
        case .toothbrushingEvent: parseToothbrushingEvent(value: value)
        default: return nil
        }
    }

    func parseAppleStandHour(value: Any?) -> HKCategoryValueAppleStandHour? {
        switch value {
        case "stood": return .stood
        case "idle": return .idle
        default: return nil
        }
    }

    func parseAudioExposureEvent(value: Any?) -> HKCategoryValueAudioExposureEvent? {
        switch value {
        case "loudEnvironment": return .loudEnvironment
        default: return nil
        }
    }

    func parseCervicalMucusQuality(value: Any?) -> HKCategoryValueCervicalMucusQuality? {
        switch value {
        case "stood": return .creamy
        case "dry": return .dry
        case "eggWhite": return .eggWhite
        case "sticky": return .sticky
        case "watery": return .watery
        default: return nil
        }
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
        switch value {
        case "heavy": return .heavy
        case "light": return .light
        case "medium": return .medium
        case "none": return .none
        case "unspecified": return .unspecified
        default: return nil
        }
    }

    func parseMindfulSession(value: Any?) -> HKCategoryValue? {
        .notApplicable
    }

    func parseOvulationTestResult(value: Any?) -> HKCategoryValueOvulationTestResult? {
        switch value {
        case "estrogenSurge": return .estrogenSurge
        case "indeterminate": return .indeterminate
        case "luteinizingHormoneSurge": return .luteinizingHormoneSurge
        case "negative": return .negative
        default: return nil
        }
    }

    func parseSexualActivity(value: Any?) -> HKCategoryValue? {
        .notApplicable
    }

    func parseSleepAnalysis(value: Any?) -> HKCategoryValueSleepAnalysis? {
        switch value {
        case "asleep": return .asleep
        case "awake": return .awake
        case "inBed": return .inBed
        default: return nil
        }
    }

    func parseToothbrushingEvent(value: Any?) -> HKCategoryValue? {
        .notApplicable
    }

    func parseSampleCategory(sample: [String: Any?]) -> HKCategorySample? {

        guard let type = parseCategoryType(sample: sample) else {
            return nil
        }

        guard let value = parseCategoryValue(type: sample, value: sample["value"]) else {
            return nil
        }

        guard let startDate = parseStartDate(sample: sample) else {
            return nil
        }

        var endDate = self.parseISO8601DateFromString(sample["endDate"], withDefault: startDate)

        if startDate > endDate {
            endDate = startDate
        }

        let device = parseDevice(sample["device"])
        let metadata = sample["metadata"]

        return HKCategorySample(type: type, value: value, start: startDate, end: endDate, device: device, metadata: metadata)
    }
}