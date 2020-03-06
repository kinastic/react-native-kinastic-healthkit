//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {
    func stringFromWorkoutActivityType(input: HKWorkoutActivityType) -> String {
        switch input {
        case .americanFootball: return "americanFootball"
        case .archery: return "archery"
        case .australianFootball: return "australianFootball"
        case .badminton: return "badminton"
        case .barre: return "barre"
        case .baseball: return "baseball"
        case .basketball: return "basketball"
        case .bowling: return "bowling"
        case .boxing: return "boxing"
        case .climbing: return "climbing"
        case .coreTraining: return "coreTraining"
        case .cricket: return "cricket"
        case .crossCountrySkiing: return "crossCountrySkiing"
        case .crossTraining: return "crossTraining"
        case .curling: return "curling"
        case .cycling: return "cycling"
        case .dance: return "dance"
        case .danceInspiredTraining: return "danceInspiredTraining"
        case .discSports: return "discSports"
        case .downhillSkiing: return "downhillSkiing"
        case .elliptical: return "elliptical"
        case .equestrianSports: return "equestrianSports"
        case .fencing: return "fencing"
        case .fishing: return "fishing"
        case .fitnessGaming: return "fitnessGaming"
        case .flexibility: return "flexibility"
        case .functionalStrengthTraining: return "functionalStrengthTraining"
        case .golf: return "golf"
        case .gymnastics: return "gymnastics"
        case .handball: return "handball"
        case .handCycling: return "handCycling"
        case .highIntensityIntervalTraining: return "highIntensityIntervalTraining"
        case .hiking: return "hiking"
        case .hockey: return "hockey"
        case .hunting: return "hunting"
        case .jumpRope: return "jumpRope"
        case .kickboxing: return "kickboxing"
        case .lacrosse: return "lacrosse"
        case .martialArts: return "martialArts"
        case .mindAndBody: return "mindAndBody"
        case .mixedCardio: return "mixedCardio"
        case .mixedMetabolicCardioTraining: return "mixedMetabolicCardioTraining"
        case .other: return "other"
        case .paddleSports: return "paddleSports"
        case .pilates: return "pilates"
        case .play: return "play"
        case .preparationAndRecovery: return "preparationAndRecovery"
        case .racquetball: return "racquetball"
        case .rowing: return "rowing"
        case .rugby: return "rugby"
        case .running: return "running"
        case .sailing: return "sailing"
        case .skatingSports: return "skatingSports"
        case .snowboarding: return "snowboarding"
        case .snowSports: return "snowSports"
        case .soccer: return "soccer"
        case .softball: return "softball"
        case .squash: return "squash"
        case .stairClimbing: return "stairClimbing"
        case .stairs: return "stairs"
        case .stepTraining: return "stepTraining"
        case .surfingSports: return "surfingSports"
        case .swimming: return "swimming"
        case .tableTennis: return "tableTennis"
        case .taiChi: return "taiChi"
        case .tennis: return "tennis"
        case .trackAndField: return "trackAndField"
        case .traditionalStrengthTraining: return "traditionalStrengthTraining"
        case .volleyball: return "volleyball"
        case .walking: return "walking"
        case .waterFitness: return "waterFitness"
        case .waterPolo: return "waterPolo"
        case .waterSports: return "waterSports"
        case .wheelchairRunPace: return "wheelchairRunPace"
        case .wheelchairWalkPace: return "wheelchairWalkPace"
        case .wrestling: return "wrestling"
        case .yoga: return "yoga"
        default: return "\(input.rawValue)"
        }
    }

    func stringFromQuantityTypeIdentifier(type: HKQuantityTypeIdentifier) -> String? {
        if #available(iOS 9.3, *) {
            if type == .appleExerciseTime {
                return "appleExerciseTime"
            }
        }

        if #available(iOS 10.0, *) {
            if type == .distanceSwimming {
                return "distanceSwimming"
            } else if type == .distanceWheelchair {
                return "distanceWheelchair"
            } else if type == .pushCount {
                return "pushCount"
            } else if type == .swimmingStrokeCount {
                return "swimmingStrokeCount"
            }
        }

        if #available(iOS 11.0, *) {
            if type == .heartRateVariabilitySDNN {
                return "heartRateVariabilitySDNN"
            } else if type == .insulinDelivery {
                return "insulinDelivery"
            } else if type == .restingHeartRate {
                return "restingHeartRate"
            } else if type == .vo2Max {
                return "vo2Max"
            } else if type == .waistCircumference {
                return "waistCircumference"
            } else if type == .walkingHeartRateAverage {
                return "walkingHeartRateAverage"
            }
        }

        if #available(iOS 11.2, *) {
            if type == .distanceDownhillSnowSports {
                return "distanceDownhillSnowSports"
            }
        }

        if #available(iOS 13.0, *) {
            if type == .appleStandTime {
                return "appleStandTime"
            } else if type == .environmentalAudioExposure {
                return "environmentalAudioExposure"
            } else if type == .headphoneAudioExposure {
                return "headphoneAudioExposure"
            }
        }

        switch type {
        case .activeEnergyBurned: return "activeEnergyBurned"
        case .basalBodyTemperature: return "basalBodyTemperature"
        case .basalEnergyBurned: return "basalEnergyBurned"
        case .bloodAlcoholContent: return "bloodAlcoholContent"
        case .bloodGlucose: return "bloodGlucose"
        case .bloodPressureDiastolic: return "bloodPressureDiastolic"
        case .bloodPressureSystolic: return "bloodPressureSystolic"
        case .bodyFatPercentage: return "bodyFatPercentage"
        case .bodyMass: return "bodyMass"
        case .bodyMassIndex: return "bodyMassIndex"
        case .bodyTemperature: return "bodyTemperature"
        case .dietaryBiotin: return "dietaryBiotin"
        case .dietaryCaffeine: return "dietaryCaffeine"
        case .dietaryCalcium: return "dietaryCalcium"
        case .dietaryCarbohydrates: return "dietaryCarbohydrates"
        case .dietaryChloride: return "dietaryChloride"
        case .dietaryCholesterol: return "dietaryCholesterol"
        case .dietaryChromium: return "dietaryChromium"
        case .dietaryCopper: return "dietaryCopper"
        case .dietaryEnergyConsumed: return "dietaryEnergyConsumed"
        case .dietaryFatMonounsaturated: return "dietaryFatMonounsaturated"
        case .dietaryFatPolyunsaturated: return "dietaryFatPolyunsaturated"
        case .dietaryFatSaturated: return "dietaryFatSaturated"
        case .dietaryFatTotal: return "dietaryFatTotal"
        case .dietaryFiber: return "dietaryFiber"
        case .dietaryFolate: return "dietaryFolate"
        case .dietaryIodine: return "dietaryIodine"
        case .dietaryIron: return "dietaryIron"
        case .dietaryMagnesium: return "dietaryMagnesium"
        case .dietaryManganese: return "dietaryManganese"
        case .dietaryMolybdenum: return "dietaryMolybdenum"
        case .dietaryNiacin: return "dietaryNiacin"
        case .dietaryPantothenicAcid: return "dietaryPantothenicAcid"
        case .dietaryPhosphorus: return "dietaryPhosphorus"
        case .dietaryPotassium: return "dietaryPotassium"
        case .dietaryProtein: return "dietaryProtein"
        case .dietaryRiboflavin: return "dietaryRiboflavin"
        case .dietarySelenium: return "dietarySelenium"
        case .dietarySodium: return "dietarySodium"
        case .dietarySugar: return "dietarySugar"
        case .dietaryThiamin: return "dietaryThiamin"
        case .dietaryVitaminA: return "dietaryVitaminA"
        case .dietaryVitaminB6: return "dietaryVitaminB6"
        case .dietaryVitaminB12: return "dietaryVitaminB12"
        case .dietaryVitaminC: return "dietaryVitaminC"
        case .dietaryVitaminD: return "dietaryVitaminD"
        case .dietaryVitaminE: return "dietaryVitaminE"
        case .dietaryVitaminK: return "dietaryVitaminK"
        case .dietaryWater: return "dietaryWater"
        case .dietaryZinc: return "dietaryZinc"
        case .distanceCycling: return "distanceCycling"
        case .distanceWalkingRunning: return "distanceWalkingRunning"
        case .electrodermalActivity: return "electrodermalActivity"
        case .flightsClimbed: return "flightsClimbed"
        case .forcedExpiratoryVolume1: return "forcedExpiratoryVolume1"
        case .forcedVitalCapacity: return "forcedVitalCapacity"
        case .heartRate: return "heartRate"
        case .height: return "height"
        case .inhalerUsage: return "inhalerUsage"
        case .leanBodyMass: return "leanBodyMass"
        case .nikeFuel: return "nikeFuel"
        case .numberOfTimesFallen: return "numberOfTimesFallen"
        case .oxygenSaturation: return "oxygenSaturation"
        case .peakExpiratoryFlowRate: return "peakExpiratoryFlowRate"
        case .peripheralPerfusionIndex: return "peripheralPerfusionIndex"
        case .respiratoryRate: return "respiratoryRate"
        case .stepCount: return "stepCount"
        case .uvExposure: return "uvExposure"
        default: return nil
        }
    }

    func stringFromCategoryTypeIdentifier(input: HKCategoryTypeIdentifier) -> String? {
        if #available(iOS 10.0, *) {
            if input == .mindfulSession {
                return "mindfulSession"
            }
        }

        if #available(iOS 12.2, *) {
            if input == .lowHeartRateEvent {
                return "lowHeartRateEvent"
            } else if input == .irregularHeartRhythmEvent {
                return "irregularHeartRhythmEvent"
            } else if input == .highHeartRateEvent {
                return "highHeartRateEvent"
            }
        }

        if #available(iOS 13.0, *) {
            if input == .audioExposureEvent {
                return "audioExposureEvent"
            } else if input == .toothbrushingEvent {
                return "toothbrushingEvent"
            }
        }

        switch input {
        case .appleStandHour: return "appleStandHour"
        case .cervicalMucusQuality: return "cervicalMucusQuality"
        case .intermenstrualBleeding: return "intermenstrualBleeding"
        case .menstrualFlow: return "menstrualFlow"
        case .ovulationTestResult: return "ovulationTestResult"
        case .sexualActivity: return "sexualActivity"
        case .sleepAnalysis: return "sleepAnalysis"
        default: return nil
        }
    }

    func stringFromCorrelationTypeIdentifier(input: HKCorrelationTypeIdentifier) -> String? {
        switch input {
        case .bloodPressure: return "bloodPressure"
        case .food: return "food"
        default: return nil
        }
    }

    func sexString(sex: HKBiologicalSexObject) -> String {
        switch (sex.biologicalSex) {
        case .notSet:return "unknown"
        case .female: return "female"
        case .male: return "male"
        case .other: return "other"
        default: return "notSet"
        }
    }

    func bloodTypeString(bloodType: HKBloodTypeObject) -> String {
        switch (bloodType.bloodType) {
        case .abNegative: return "abNegative"
        case .abPositive: return "abPositive"
        case .aNegative: return "aNegative"
        case .aPositive: return "aPositive"
        case .bNegative: return "bNegative"
        case .bPositive: return "bPositive"
        case .oNegative: return "oNegative"
        case .oPositive: return "oPositive"
        default: return "notSet"
        }
    }

    func fitzpatrickSkinTypeString(fitzpatrickSkinType: HKFitzpatrickSkinTypeObject) -> String {
        switch (fitzpatrickSkinType.skinType) {
        case .I: return "I"
        case .II: return "II"
        case .III: return "III"
        case .IV: return "IV"
        case .V: return "V"
        case .VI: return "VI"
        default: return "notSet"
        }
    }

    @available(iOS 10.0, *)
    func wheelchairUseString(wheelchairUse: HKWheelchairUseObject) -> String {
        switch (wheelchairUse.wheelchairUse) {
        case .no: return "no"
        case .yes: return "yes"
        default: return "notSet"
        }
    }

    func workoutEventTypeString(workoutEvent: HKWorkoutEventType) -> String {
        switch workoutEvent {
        case .segment: return "segment"
        case .pauseOrResumeRequest: return "pauseOrResumeRequest"
        case .pause: return "pause"
        case .motionPaused: return "motionPaused"
        case .marker: return "marker"
        case .lap: return "lap"
        case .motionResumed: return "motionResumed"
        case .resume: return "resume"
        default: return "\(workoutEvent.rawValue)"
        }
    }

    func unitString(unit: HKUnit?) -> String? {
        unit?.unitString
    }

    func sampleTypeToString(value: HKSampleType) -> String? {
        if let correlation = value as? HKCorrelationType {
            return correlationTypeToString(value: correlation)
        } else if let quantity = value as? HKQuantityType {
            return quantityTypeToString(value: quantity)
        } else if let category = value as? HKCategoryType {
            return categoryTypeToString(value: category)
        } else if #available(iOS 10.0, *), let _ = value as? HKDocumentType {
            return "CDA"
        } else if let _ = value as? HKWorkoutType {
            return "workout"
        } else if #available(iOS 11.0, *), let series = value as? HKSeriesType {
            return seriesTypeToString(value: series)
        }
        return nil
    }

    func quantityTypeToString(value: HKQuantityType) -> String {
        return stringFromQuantityTypeIdentifier(type: HKQuantityTypeIdentifier(rawValue: value.identifier)) ??
                value.identifier.replacingOccurrences(of: "HKQuantityTypeIdentifier", with: "").lowercasingFirstLetter()
    }

    func categoryTypeToString(value: HKCategoryType) -> String {
        return stringFromCategoryTypeIdentifier(input: HKCategoryTypeIdentifier(rawValue: value.identifier)) ??
                value.identifier.replacingOccurrences(of: "HKCategoryTypeIdentifier", with: "").lowercasingFirstLetter()
    }

    func correlationTypeToString(value: HKCorrelationType) -> String {
        return stringFromCorrelationTypeIdentifier(input: HKCorrelationTypeIdentifier(rawValue: value.identifier)) ??
                value.identifier.replacingOccurrences(of: "HKCorrelationTypeIdentifier", with: "").lowercasingFirstLetter()
    }

    @available(iOS 11.0, *)
    func seriesTypeToString(value: HKSeriesType) -> String? {
        if value.identifier == HKSeriesType.workoutRoute().identifier {
            return "workoutRoute"
        } else if #available(iOS 13.0, *), value.identifier == HKSeriesType.heartbeat().identifier {
            return "heartbeat"
        }
        return nil
    }

    func operatingSystemVersionToString(version: OperatingSystemVersion) -> String {
        "\(version.majorVersion).\(version.minorVersion).\(version.patchVersion)"
    }
}

extension String {
    func capitalizingFirstLetter() -> String {
        return prefix(1).lowercased() + dropFirst()
    }

    mutating func capitalizeFirstLetter() {
        self = self.capitalizingFirstLetter()
    }

    func lowercasingFirstLetter() -> String {
        return prefix(1).lowercased() + dropFirst()
    }

    mutating func lowercasingFirstLetter() {
        self = self.lowercasingFirstLetter()
    }
}
