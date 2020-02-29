//
//  KinasticHealthkit+TypesAndPermissions.swift
//  KinasticHealthkit
//
//  Created by neo on 27.02.20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    func getQuantityTypeFromString(_ perm: String?) -> HKQuantityType? {
        switch perm {
        case "activeEnergyBurned": return HKQuantityType.quantityType(forIdentifier: .activeEnergyBurned)
        case "appleExerciseTime": if #available(iOS 9.3, *) {
            return HKQuantityType.quantityType(forIdentifier: .appleExerciseTime)
        } else {
            return nil
        }
        case "appleStandTime": if #available(iOS 13.0, *) {
            return HKQuantityType.quantityType(forIdentifier: .appleStandTime)
        } else {
            return nil
        }
        case "basalBodyTemperature": return HKQuantityType.quantityType(forIdentifier: .basalBodyTemperature)
        case "basalEnergyBurned": return HKQuantityType.quantityType(forIdentifier: .basalEnergyBurned)
        case "bloodAlcoholContent": return HKQuantityType.quantityType(forIdentifier: .bloodAlcoholContent)
        case "bloodGlucose": return HKQuantityType.quantityType(forIdentifier: .bloodGlucose)
        case "bloodPressureDiastolic": return HKQuantityType.quantityType(forIdentifier: .bloodPressureDiastolic)
        case "bloodPressureSystolic": return HKQuantityType.quantityType(forIdentifier: .bloodPressureSystolic)
        case "bodyFatPercentage": return HKQuantityType.quantityType(forIdentifier: .bodyFatPercentage)
        case "bodyMass": return HKQuantityType.quantityType(forIdentifier: .bodyMass)
        case "bodyMassIndex": return HKQuantityType.quantityType(forIdentifier: .bodyMassIndex)
        case "bodyTemperature": return HKQuantityType.quantityType(forIdentifier: .bodyTemperature)
        case "dietaryBiotin": return HKQuantityType.quantityType(forIdentifier: .dietaryBiotin)
        case "dietaryCaffeine": return HKQuantityType.quantityType(forIdentifier: .dietaryCaffeine)
        case "dietaryCalcium": return HKQuantityType.quantityType(forIdentifier: .dietaryCalcium)
        case "dietaryCarbohydrates": return HKQuantityType.quantityType(forIdentifier: .dietaryCarbohydrates)
        case "dietaryChloride": return HKQuantityType.quantityType(forIdentifier: .dietaryChloride)
        case "dietaryCholesterol": return HKQuantityType.quantityType(forIdentifier: .dietaryCholesterol)
        case "dietaryChromium": return HKQuantityType.quantityType(forIdentifier: .dietaryChromium)
        case "dietaryCopper": return HKQuantityType.quantityType(forIdentifier: .dietaryCopper)
        case "dietaryEnergyConsumed": return HKQuantityType.quantityType(forIdentifier: .dietaryEnergyConsumed)
        case "dietaryFatMonounsaturated": return HKQuantityType.quantityType(forIdentifier: .dietaryFatMonounsaturated)
        case "dietaryFatPolyunsaturated": return HKQuantityType.quantityType(forIdentifier: .dietaryFatPolyunsaturated)
        case "dietaryFatSaturated": return HKQuantityType.quantityType(forIdentifier: .dietaryFatSaturated)
        case "dietaryFatTotal": return HKQuantityType.quantityType(forIdentifier: .dietaryFatTotal)
        case "dietaryFiber": return HKQuantityType.quantityType(forIdentifier: .dietaryFiber)
        case "dietaryFolate": return HKQuantityType.quantityType(forIdentifier: .dietaryFolate)
        case "dietaryIodine": return HKQuantityType.quantityType(forIdentifier: .dietaryIodine)
        case "dietaryIron": return HKQuantityType.quantityType(forIdentifier: .dietaryIron)
        case "dietaryMagnesium": return HKQuantityType.quantityType(forIdentifier: .dietaryMagnesium)
        case "dietaryManganese": return HKQuantityType.quantityType(forIdentifier: .dietaryManganese)
        case "dietaryMolybdenum": return HKQuantityType.quantityType(forIdentifier: .dietaryMolybdenum)
        case "dietaryNiacin": return HKQuantityType.quantityType(forIdentifier: .dietaryNiacin)
        case "dietaryPantothenicAcid": return HKQuantityType.quantityType(forIdentifier: .dietaryPantothenicAcid)
        case "dietaryPhosphorus": return HKQuantityType.quantityType(forIdentifier: .dietaryPhosphorus)
        case "dietaryPotassium": return HKQuantityType.quantityType(forIdentifier: .dietaryPotassium)
        case "dietaryProtein": return HKQuantityType.quantityType(forIdentifier: .dietaryProtein)
        case "dietaryRiboflavin": return HKQuantityType.quantityType(forIdentifier: .dietaryRiboflavin)
        case "dietarySelenium": return HKQuantityType.quantityType(forIdentifier: .dietarySelenium)
        case "dietarySodium": return HKQuantityType.quantityType(forIdentifier: .dietarySodium)
        case "dietarySugar": return HKQuantityType.quantityType(forIdentifier: .dietarySugar)
        case "dietaryThiamin": return HKQuantityType.quantityType(forIdentifier: .dietaryThiamin)
        case "dietaryVitaminA": return HKQuantityType.quantityType(forIdentifier: .dietaryVitaminA)
        case "dietaryVitaminB6": return HKQuantityType.quantityType(forIdentifier: .dietaryVitaminB6)
        case "dietaryVitaminB12": return HKQuantityType.quantityType(forIdentifier: .dietaryVitaminB12)
        case "dietaryVitaminC": return HKQuantityType.quantityType(forIdentifier: .dietaryVitaminC)
        case "dietaryVitaminD": return HKQuantityType.quantityType(forIdentifier: .dietaryVitaminD)
        case "dietaryVitaminE": return HKQuantityType.quantityType(forIdentifier: .dietaryVitaminE)
        case "dietaryVitaminK": return HKQuantityType.quantityType(forIdentifier: .dietaryVitaminK)
        case "dietaryWater": return HKQuantityType.quantityType(forIdentifier: .dietaryWater)
        case "dietaryZinc": return HKQuantityType.quantityType(forIdentifier: .dietaryZinc)
        case "distanceCycling": return HKQuantityType.quantityType(forIdentifier: .distanceCycling)
        case "distanceDownhillSnowSports": if #available(iOS 11.2, *) {
            return HKQuantityType.quantityType(forIdentifier: .distanceDownhillSnowSports)
        } else {
            return nil
        }
        case "distanceSwimming": if #available(iOS 10.0, *) {
            return HKQuantityType.quantityType(forIdentifier: .distanceSwimming)
        } else {
            return nil
        }
        case "distanceWalkingRunning": return HKQuantityType.quantityType(forIdentifier: .distanceWalkingRunning)
        case "distanceWheelchair": if #available(iOS 10.0, *) {
            return HKQuantityType.quantityType(forIdentifier: .distanceWheelchair)
        } else {
            return nil
        }
        case "electrodermalActivity": return HKQuantityType.quantityType(forIdentifier: .electrodermalActivity)
        case "environmentalAudioExposure": if #available(iOS 13.0, *) {
            return HKQuantityType.quantityType(forIdentifier: .environmentalAudioExposure)
        } else {
            return nil
        }
        case "flightsClimbed": return HKQuantityType.quantityType(forIdentifier: .flightsClimbed)
        case "forcedExpiratoryVolume1": return HKQuantityType.quantityType(forIdentifier: .forcedExpiratoryVolume1)
        case "forcedVitalCapacity": return HKQuantityType.quantityType(forIdentifier: .forcedVitalCapacity)
        case "headphoneAudioExposure": if #available(iOS 13.0, *) {
            return HKQuantityType.quantityType(forIdentifier: .headphoneAudioExposure)
        } else {
            return nil
        }
        case "heartRate": return HKQuantityType.quantityType(forIdentifier: .heartRate)
        case "heartRateVariabilitySDNN": if #available(iOS 11.0, *) {
            return HKQuantityType.quantityType(forIdentifier: .heartRateVariabilitySDNN)
        } else {
            return nil
        }
        case "height": return HKQuantityType.quantityType(forIdentifier: .height)
        case "inhalerUsage": return HKQuantityType.quantityType(forIdentifier: .inhalerUsage)
        case "insulinDelivery": if #available(iOS 11.0, *) {
            return HKQuantityType.quantityType(forIdentifier: .insulinDelivery)
        } else {
            return nil
        }
        case "leanBodyMass": return HKQuantityType.quantityType(forIdentifier: .leanBodyMass)
        case "nikeFuel": return HKQuantityType.quantityType(forIdentifier: .nikeFuel)
        case "numberOfTimesFallen": return HKQuantityType.quantityType(forIdentifier: .numberOfTimesFallen)
        case "oxygenSaturation": return HKQuantityType.quantityType(forIdentifier: .oxygenSaturation)
        case "peakExpiratoryFlowRate": return HKQuantityType.quantityType(forIdentifier: .peakExpiratoryFlowRate)
        case "peripheralPerfusionIndex": return HKQuantityType.quantityType(forIdentifier: .peripheralPerfusionIndex)
        case "pushCount": if #available(iOS 10.0, *) {
            return HKQuantityType.quantityType(forIdentifier: .pushCount)
        } else {
            return nil
        }
        case "respiratoryRate": return HKQuantityType.quantityType(forIdentifier: .respiratoryRate)
        case "restingHeartRate": if #available(iOS 11.0, *) {
            return HKQuantityType.quantityType(forIdentifier: .restingHeartRate)
        } else {
            return nil
        }
        case "stepCount": return HKQuantityType.quantityType(forIdentifier: .stepCount)
        case "swimmingStrokeCount": if #available(iOS 10.0, *) {
            return HKQuantityType.quantityType(forIdentifier: .swimmingStrokeCount)
        } else {
            return nil
        }
        case "uvExposure": return HKQuantityType.quantityType(forIdentifier: .uvExposure)
        case "vo2Max": if #available(iOS 11.0, *) {
            return HKQuantityType.quantityType(forIdentifier: .vo2Max)
        } else {
            return nil
        }
        case "waistCircumference": if #available(iOS 11.0, *) {
            return HKQuantityType.quantityType(forIdentifier: .waistCircumference)
        } else {
            return nil
        }
        case "walkingHeartRateAverage": if #available(iOS 11.0, *) {
            return HKQuantityType.quantityType(forIdentifier: .walkingHeartRateAverage)
        } else {
            return nil
        }
        default: return nil
        }
    }

    func getCategoryTypeFromString(input: String?) -> HKCategoryType? {
        switch input {
        case "appleStandHour": return HKObjectType.categoryType(forIdentifier: .appleStandHour)
        case "audioExposureEvent": if #available(iOS 13.0, *) {
            return HKObjectType.categoryType(forIdentifier: .audioExposureEvent)
        } else {
            return nil
        }
        case "cervicalMucusQuality": return HKObjectType.categoryType(forIdentifier: .cervicalMucusQuality)
        case "highHeartRateEvent": if #available(iOS 12.2, *) {
            return HKObjectType.categoryType(forIdentifier: .highHeartRateEvent)
        } else {
            return nil
        }
        case "intermenstrualBleeding": return HKObjectType.categoryType(forIdentifier: .intermenstrualBleeding)
        case "irregularHeartRhythmEvent": if #available(iOS 12.2, *) {
            return HKObjectType.categoryType(forIdentifier: .irregularHeartRhythmEvent)
        } else {
            return nil
        }
        case "lowHeartRateEvent": if #available(iOS 12.2, *) {
            return HKObjectType.categoryType(forIdentifier: .lowHeartRateEvent)
        } else {
            return nil
        }
        case "menstrualFlow": return HKObjectType.categoryType(forIdentifier: .menstrualFlow)
        case "mindfulSession": if #available(iOS 10.0, *) {
            return HKObjectType.categoryType(forIdentifier: .mindfulSession)
        } else {
            return nil
        }
        case "ovulationTestResult": return HKObjectType.categoryType(forIdentifier: .ovulationTestResult)
        case "sexualActivity": return HKObjectType.categoryType(forIdentifier: .sexualActivity)
        case "sleepAnalysis": return HKObjectType.categoryType(forIdentifier: .sleepAnalysis)
        case "toothbrushingEvent": if #available(iOS 13.0, *) {
            return HKObjectType.categoryType(forIdentifier: .toothbrushingEvent)
        } else {
            return nil
        }
        default: return nil
        }
    }

    func getCategoryTypeIdentifierFromString(input: String?) -> HKCategoryTypeIdentifier? {
        switch input {
        case "appleStandHour": return .appleStandHour
        case "audioExposureEvent": if #available(iOS 13.0, *) {
            return .audioExposureEvent
        } else {
            return nil
        }
        case "cervicalMucusQuality": return .cervicalMucusQuality
        case "highHeartRateEvent": if #available(iOS 12.2, *) {
            return .highHeartRateEvent
        } else {
            return nil
        }
        case "intermenstrualBleeding": return .intermenstrualBleeding
        case "irregularHeartRhythmEvent": if #available(iOS 12.2, *) {
            return .irregularHeartRhythmEvent
        } else {
            return nil
        }
        case "lowHeartRateEvent": if #available(iOS 12.2, *) {
            return .lowHeartRateEvent
        } else {
            return nil
        }
        case "menstrualFlow": return .menstrualFlow
        case "mindfulSession": if #available(iOS 10.0, *) {
            return .mindfulSession
        } else {
            return nil
        }
        case "ovulationTestResult": return .ovulationTestResult
        case "sexualActivity": return .sexualActivity
        case "sleepAnalysis": return .sleepAnalysis
        case "toothbrushingEvent": if #available(iOS 13.0, *) {
            return .toothbrushingEvent
        } else {
            return nil
        }
        default: return nil
        }
    }

    func getCorrelationTypeFromString(input: String?) -> HKCorrelationType? {
        switch input {
        case "bloodPressure": return HKObjectType.correlationType(forIdentifier: .bloodPressure)
        case "food": return HKObjectType.correlationType(forIdentifier: .food)
        default: return nil
        }
    }

    func getActivityTypeFromString(input: String?) -> HKWorkoutActivityType? {
        switch input {
        case "americanFootball": return .americanFootball
        case "archery": return .archery
        case "australianFootball": return .australianFootball
        case "badminton": return .badminton
        case "barre": if #available(iOS 10.0, *) {
            return .barre
        } else {
            return nil
        }
        case "baseball": return .baseball
        case "basketball": return .basketball
        case "bowling": return .bowling
        case "boxing": return .boxing
        case "climbing": return .climbing
        case "coreTraining": if #available(iOS 10.0, *) {
            return .coreTraining
        } else {
            return nil
        }
        case "cricket": return .cricket
        case "crossCountrySkiing": if #available(iOS 10.0, *) {
            return .crossCountrySkiing
        } else {
            return nil
        }
        case "crossTraining": return .crossTraining
        case "curling": return .curling
        case "cycling": return .cycling
        case "dance": return .dance
        case "danceInspiredTraining": return .danceInspiredTraining
        case "discSports": if #available(iOS 13.0, *) {
            return .discSports
        } else {
            return nil
        }
        case "downhillSkiing": if #available(iOS 10.0, *) {
            return .downhillSkiing
        } else {
            return nil
        }
        case "elliptical": return .elliptical
        case "equestrianSports": return .equestrianSports
        case "fencing": return .fencing
        case "fishing": return .fishing
        case "fitnessGaming": if #available(iOS 13.0, *) {
            return .fitnessGaming
        } else {
            return nil
        }
        case "flexibility": if #available(iOS 10.0, *) {
            return .flexibility
        } else {
            return nil
        }
        case "functionalStrengthTraining": return .functionalStrengthTraining
        case "golf": return .golf
        case "gymnastics": return .gymnastics
        case "handball": return .handball
        case "handCycling": if #available(iOS 11.0, *) {
            return .handCycling
        } else {
            return nil
        }
        case "highIntensityIntervalTraining": if #available(iOS 10.0, *) {
            return .highIntensityIntervalTraining
        } else {
            return nil
        }
        case "hiking": return .hiking
        case "hockey": return .hockey
        case "hunting": return .hunting
        case "jumpRope": if #available(iOS 10.0, *) {
            return .jumpRope
        } else {
            return nil
        }
        case "kickboxing": if #available(iOS 10.0, *) {
            return .kickboxing
        } else {
            return nil
        }
        case "lacrosse": return .lacrosse
        case "martialArts": return .martialArts
        case "mindAndBody": return .mindAndBody
        case "mixedCardio": if #available(iOS 11.0, *) {
            return .mixedCardio
        } else {
            return nil
        }
        case "mixedMetabolicCardioTraining": return .mixedMetabolicCardioTraining
        case "none": return .none
        case "other": return .other
        case "paddleSports": return .paddleSports
        case "pilates": if #available(iOS 10.0, *) {
            return .pilates
        } else {
            return nil
        }
        case "play": return .play
        case "preparationAndRecovery": return .preparationAndRecovery
        case "racquetball": return .racquetball
        case "rowing": return .rowing
        case "rugby": return .rugby
        case "running": return .running
        case "sailing": return .sailing
        case "skatingSports": return .skatingSports
        case "snowboarding": if #available(iOS 10.0, *) {
            return .snowboarding
        } else {
            return nil
        }
        case "snowSports": return .snowSports
        case "soccer": return .soccer
        case "softball": return .softball
        case "squash": return .squash
        case "stairClimbing": return .stairClimbing
        case "stairs": if #available(iOS 10.0, *) {
            return .stairs
        } else {
            return nil
        }
        case "stepTraining": if #available(iOS 10.0, *) {
            return .stepTraining
        } else {
            return nil
        }
        case "surfingSports": return .surfingSports
        case "swimming": return .swimming
        case "tableTennis": return .tableTennis
        case "taiChi": if #available(iOS 11.0, *) {
            return .taiChi
        } else {
            return nil
        }
        case "tennis": return .tennis
        case "trackAndField": return .trackAndField
        case "traditionalStrengthTraining": return .traditionalStrengthTraining
        case "volleyball": return .volleyball
        case "walking": return .walking
        case "waterFitness": return .waterFitness
        case "waterPolo": return .waterPolo
        case "waterSports": return .waterSports
        case "wheelchairRunPace": if #available(iOS 10.0, *) {
            return .wheelchairRunPace
        } else {
            return nil
        }
        case "wheelchairWalkPace": if #available(iOS 10.0, *) {
            return .wheelchairWalkPace
        } else {
            return nil
        }
        case "wrestling": return .wrestling
        case "yoga": return .yoga
        default: return nil
        }
    }

    func getCharacteristicTypeFromString(input: String?) -> HKCharacteristicType? {
        switch input {
        case "dateOfBirth": return HKObjectType.characteristicType(forIdentifier: .dateOfBirth)
        case "biologicalSex": return HKObjectType.characteristicType(forIdentifier: .biologicalSex)
        case "bloodType": return HKObjectType.characteristicType(forIdentifier: .bloodType)
        case "fitzpatrickSkinType": return HKObjectType.characteristicType(forIdentifier: .fitzpatrickSkinType)
        case "wheelchairUse": if #available(iOS 10.0, *) {
            return HKObjectType.characteristicType(forIdentifier: .wheelchairUse)
        } else {
            return nil
        }
        default: return nil
        }
    }

    func getObjectTypeFromString(_ perm: String?) -> HKObjectType? {
        if let sampleType = getSampleTypeFromString(perm: perm) {
            return sampleType
        }

        if let characteristic = getCharacteristicTypeFromString(input: perm) {
            return characteristic
        }

        switch perm {
        case "activitySummary": if #available(iOS 9.3, *) {
            return HKObjectType.activitySummaryType()
        } else {
            return nil
        }
        default: return nil
        }
    }

    func getSampleTypeFromString(perm: String?) -> HKSampleType? {
        if let quantityType = getQuantityTypeFromString(perm) {
            return quantityType
        }

        if let category = getCategoryTypeFromString(input: perm) {
            return category
        }

        if let correlation = getCorrelationTypeFromString(input: perm) {
            return correlation
        }

        switch perm {
        case "workout": return HKObjectType.workoutType()
        case "CDA": if #available(iOS 10.0, *) {
            return HKObjectType.documentType(forIdentifier: .CDA)
        } else {
            return nil
        }
        case "audiogram": if #available(iOS 13.0, *) {
            return HKObjectType.audiogramSampleType()
        } else {
            return nil
        }
        default: return nil
        }
    }


    func getWorkoutEventTypeFromString(input: String?) -> HKWorkoutEventType? {
        switch input {
        case "lap": if #available(iOS 10.0, *) {
            return .lap
        } else {
            return .resume
        }
        case "marker": if #available(iOS 10.0, *) {
            return .marker
        } else {
            return .pause
        }
        case "motionPaused": if #available(iOS 10.0, *) {
            return .motionPaused
        } else {
            return .pause
        }
        case "motionResumed": if #available(iOS 10.0, *) {
            return .motionResumed
        } else {
            return .resume
        }

        case "pauseOrResumeRequest": if #available(iOS 11.0, *) {
            return .pauseOrResumeRequest
        } else {
            return .pause
        }
        case "segment": if #available(iOS 11.0, *) {
            return .segment
        } else {
            return .resume
        }
        case "resume": return .resume
        case "pause": return .pause
        default: return nil
        }
    }

    func getUnitFromString(input: String?) -> HKUnit? {
        switch input {
        case "atm": return .atmosphere()
        case "cmAq": return .centimeterOfWater()
        case "count": return .count()
        case "cup_imp": return .cupImperial()
        case "cup_us": return .cupUS()
        case "d": return .day()
        case "dBASPL": if #available(iOS 13.0, *) {
            return .decibelAWeightedSoundPressureLevel()
        } else {
            return nil
        }
        case "dBHL": if #available(iOS 13.0, *) {
            return .decibelHearingLevel()
        } else {
            return nil
        }
        case "degC": return .degreeCelsius()
        case "degF": return .degreeFahrenheit()
        case "fl_oz_imp": return .fluidOunceImperial()
        case "fl_oz_us": return .fluidOunceUS()
        case "ft": return .foot()
        case "g": return .gram()
        case "kg": return .gramUnit(with: .kilo)
        case "mg": return .gramUnit(with: .milli)
        case "Hz": if #available(iOS 13.0, *) {
            return .hertz()
        } else {
            return nil
        }
        case "kHz": if #available(iOS 13.0, *) {
            return .hertzUnit(with: .kilo)
        } else {
            return nil
        }
        case "hr": return .hour()
        case "in": return .inch()
        case "IU": if #available(iOS 11.0, *) {
            return .internationalUnit()
        } else {
            return nil
        }
        case "J": return .joule()
        case "kJ": return .jouleUnit(with: .kilo)
        case "K": return .kelvin()
        case "kcal": return .kilocalorie()
        case "L": return .liter()
        case "mL": return .literUnit(with: .milli)
        case "dL": return .literUnit(with: .deci)
        case "m": return .meter()
        case "km": return .meterUnit(with: .kilo)
        case "cm": return .meterUnit(with: .centi)
        case "mm": return .meterUnit(with: .milli)
        case "mi": return .mile()
        case "mmHg": return .millimeterOfMercury()
        case "min": return .minute()
        case "oz": return .ounce()
        case "Pa": return .pascal()
        case "kPa": return .pascalUnit(with: .kilo)
        case "hPa": return .pascalUnit(with: .hecto)
        case "%": return .percent()
        case "pt_imp": return .pintImperial()
        case "pt_us": return .pintUS()
        case "lb": return .pound()
        case "s": return .second()
        case "ms": return .secondUnit(with: .milli)
        case "S": return .siemen()
        case "cal": if #available(iOS 11.0, *) {
            return .smallCalorie()
        } else {
            return .calorie()
        }
        case "st": return .stone()
        case "yd": return .yard()
        case "mmol/L": return HKUnit.moleUnit(with: .milli, molarMass: HKUnitMolarMassBloodGlucose).unitDivided(by: .liter())
        case "mg/dL": return HKUnit(from: "mg/dL")
        default: return nil
        }
    }

    func parsePermissions(_ permissions: [String]) -> Set<HKObjectType> {
        Set(permissions.map {
            getObjectTypeFromString($0)
        }.compactMap {
            $0
        })
    }

    func parseWritePermissions(permissions: [String]) -> Set<HKSampleType> {
        Set(permissions.map {
            getSampleTypeFromString(perm: $0)
        }.compactMap {
            $0
        })
    }

    func getAuthorizationStatusString(_ status: HKAuthorizationStatus) -> String {
        switch status {
        case .sharingDenied: return "sharingDenied"
        case .sharingAuthorized: return "sharingAuthorized"
        default: return "notDetermined"
        }
    }
}
