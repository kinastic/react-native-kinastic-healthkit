//
//  KinasticHealthkit+TypesAndPermissions.swift
//  KinasticHealthkit
//
//  Created by neo on 27.02.20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import KinasticHealthkit
import HealthKit

extension KinasticHealthkit {

    func getQuantityTypeFromString(_ perm: String?) -> HKQuantityType? {
        switch perm {
        case "activeEnergyBurned": return HKQuantityType.quantityType(forIdentifier: .activeEnergyBurned)
        case "appleExerciseTime": return HKQuantityType.quantityType(forIdentifier: .appleExerciseTime)
        case "appleStandTime": return HKQuantityType.quantityType(forIdentifier: .appleStandTime)
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
        case "distanceDownhillSnowSports": return HKQuantityType.quantityType(forIdentifier: .distanceDownhillSnowSports)
        case "distanceSwimming": return HKQuantityType.quantityType(forIdentifier: .distanceSwimming)
        case "distanceWalkingRunning": return HKQuantityType.quantityType(forIdentifier: .distanceWalkingRunning)
        case "distanceWheelchair": return HKQuantityType.quantityType(forIdentifier: .distanceWheelchair)
        case "electrodermalActivity": return HKQuantityType.quantityType(forIdentifier: .electrodermalActivity)
        case "environmentalAudioExposure": return HKQuantityType.quantityType(forIdentifier: .environmentalAudioExposure)
        case "flightsClimbed": return HKQuantityType.quantityType(forIdentifier: .flightsClimbed)
        case "forcedExpiratoryVolume1": return HKQuantityType.quantityType(forIdentifier: .forcedExpiratoryVolume1)
        case "forcedVitalCapacity": return HKQuantityType.quantityType(forIdentifier: .forcedVitalCapacity)
        case "headphoneAudioExposure": return HKQuantityType.quantityType(forIdentifier: .headphoneAudioExposure)
        case "heartRate": return HKQuantityType.quantityType(forIdentifier: .heartRate)
        case "heartRateVariabilitySDNN": return HKQuantityType.quantityType(forIdentifier: .heartRateVariabilitySDNN)
        case "height": return HKQuantityType.quantityType(forIdentifier: .height)
        case "inhalerUsage": return HKQuantityType.quantityType(forIdentifier: .inhalerUsage)
        case "insulinDelivery": return HKQuantityType.quantityType(forIdentifier: .insulinDelivery)
        case "leanBodyMass": return HKQuantityType.quantityType(forIdentifier: .leanBodyMass)
        case "nikeFuel": return HKQuantityType.quantityType(forIdentifier: .nikeFuel)
        case "numberOfTimesFallen": return HKQuantityType.quantityType(forIdentifier: .numberOfTimesFallen)
        case "oxygenSaturation": return HKQuantityType.quantityType(forIdentifier: .oxygenSaturation)
        case "peakExpiratoryFlowRate": return HKQuantityType.quantityType(forIdentifier: .peakExpiratoryFlowRate)
        case "peripheralPerfusionIndex": return HKQuantityType.quantityType(forIdentifier: .peripheralPerfusionIndex)
        case "pushCount": return HKQuantityType.quantityType(forIdentifier: .pushCount)
        case "respiratoryRate": return HKQuantityType.quantityType(forIdentifier: .respiratoryRate)
        case "restingHeartRate": return HKQuantityType.quantityType(forIdentifier: .restingHeartRate)
        case "stepCount": return HKQuantityType.quantityType(forIdentifier: .stepCount)
        case "swimmingStrokeCount": return HKQuantityType.quantityType(forIdentifier: .swimmingStrokeCount)
        case "uvExposure": return HKQuantityType.quantityType(forIdentifier: .uvExposure)
        case "vo2Max": return HKQuantityType.quantityType(forIdentifier: .vo2Max)
        case "waistCircumference": return HKQuantityType.quantityType(forIdentifier: .waistCircumference)
        case "walkingHeartRateAverage": return HKQuantityType.quantityType(forIdentifier: .walkingHeartRateAverage)
        default: return nil
        }
    }

    func getCategoryTypeFromString(input: String?) -> HKCategoryType? {
        switch input {
        case "appleStandHour": return HKObjectType.categoryType(forIdentifier: .appleStandHour)
        case "audioExposureEvent": return HKObjectType.categoryType(forIdentifier: .audioExposureEvent)
        case "cervicalMucusQuality": return HKObjectType.categoryType(forIdentifier: .cervicalMucusQuality)
        case "highHeartRateEvent": return HKObjectType.categoryType(forIdentifier: .highHeartRateEvent)
        case "highHeartRateEvent": return HKObjectType.categoryType(forIdentifier: .highHeartRateEvent)
        case "intermenstrualBleeding": return HKObjectType.categoryType(forIdentifier: .intermenstrualBleeding)
        case "irregularHeartRhythmEvent": return HKObjectType.categoryType(forIdentifier: .irregularHeartRhythmEvent)
        case "lowHeartRateEvent": return HKObjectType.categoryType(forIdentifier: .lowHeartRateEvent)
        case "menstrualFlow": return HKObjectType.categoryType(forIdentifier: .menstrualFlow)
        case "mindfulSession": return HKObjectType.categoryType(forIdentifier: .mindfulSession)
        case "ovulationTestResult": return HKObjectType.categoryType(forIdentifier: .ovulationTestResult)
        case "sexualActivity": return HKObjectType.categoryType(forIdentifier: .sexualActivity)
        case "sleepAnalysis": return HKObjectType.categoryType(forIdentifier: .sleepAnalysis)
        case "toothbrushingEvent": return HKObjectType.categoryType(forIdentifier: .toothbrushingEvent)
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
        case "barre": return .barre
        case "baseball": return .baseball
        case "basketball": return .basketball
        case "bowling": return .bowling
        case "boxing": return .boxing
        case "climbing": return .climbing
        case "coreTraining": return .coreTraining
        case "cricket": return .cricket
        case "crossCountrySkiing": return .crossCountrySkiing
        case "crossTraining": return .crossTraining
        case "curling": return .curling
        case "cycling": return .cycling
        case "dance": return .dance
        case "danceInspiredTraining": return .danceInspiredTraining
        case "discSports": return .discSports
        case "downhillSkiing": return .downhillSkiing
        case "elliptical": return .elliptical
        case "equestrianSports": return .equestrianSports
        case "fencing": return .fencing
        case "fishing": return .fishing
        case "fitnessGaming": return .fitnessGaming
        case "flexibility": return .flexibility
        case "functionalStrengthTraining": return .functionalStrengthTraining
        case "golf": return .golf
        case "gymnastics": return .gymnastics
        case "handball": return .handball
        case "handCycling": return .handCycling
        case "highIntensityIntervalTraining": return .highIntensityIntervalTraining
        case "hiking": return .hiking
        case "hockey": return .hockey
        case "hunting": return .hunting
        case "jumpRope": return .jumpRope
        case "kickboxing": return .kickboxing
        case "lacrosse": return .lacrosse
        case "martialArts": return .martialArts
        case "mindAndBody": return .mindAndBody
        case "mixedCardio": return .mixedCardio
        case "mixedMetabolicCardioTraining": return .mixedMetabolicCardioTraining
        case "none": return .none
        case "other": return .other
        case "paddleSports": return .paddleSports
        case "pilates": return .pilates
        case "play": return .play
        case "preparationAndRecovery": return .preparationAndRecovery
        case "racquetball": return .racquetball
        case "rowing": return .rowing
        case "rugby": return .rugby
        case "running": return .running
        case "sailing": return .sailing
        case "skatingSports": return .skatingSports
        case "snowboarding": return .snowboarding
        case "snowSports": return .snowSports
        case "soccer": return .soccer
        case "softball": return .softball
        case "squash": return .squash
        case "stairClimbing": return .stairClimbing
        case "stairs": return .stairs
        case "stepTraining": return .stepTraining
        case "surfingSports": return .surfingSports
        case "swimming": return .swimming
        case "tableTennis": return .tableTennis
        case "taiChi": return .taiChi
        case "tennis": return .tennis
        case "trackAndField": return .trackAndField
        case "traditionalStrengthTraining": return .traditionalStrengthTraining
        case "volleyball": return .volleyball
        case "walking": return .walking
        case "waterFitness": return .waterFitness
        case "waterPolo": return .waterPolo
        case "waterSports": return .waterSports
        case "wheelchairRunPace": return .wheelchairRunPace
        case "wheelchairWalkPace": return .wheelchairWalkPace
        case "wrestling": return .wrestling
        case "yoga": return .yoga
        default: return nil
        }
    }

    func getCharacteristicTypeFromString(input: String?) -> HKCharacteristicType {
        switch input {
        case "dateOfBirth": return HKObjectType.characteristicType(forIdentifier: .dateOfBirth)
        case "biologicalSex": return HKObjectType.characteristicType(forIdentifier: .biologicalSex)
        case "bloodType": return HKObjectType.characteristicType(forIdentifier: .bloodType)
        case "fitzpatrickSkinType": return HKObjectType.characteristicType(forIdentifier: .fitzpatrickSkinType)
        case "wheelchairUse": return HKObjectType.characteristicType(forIdentifier: .wheelchairUse)
        default: return nil
        }
    }

    func getObjectTypeFromString(_ perm: String?) -> HKObjectType? {
        if let quantityType = getQuantityTypeFromString(perm) {
            return quantityType
        }

        if let category = getCategoryTypeFromString(input: perm) {
            return category
        }

        if let correlation = getCorrelationTypeFromString(input: perm) {
            return correlation
        }

        if let characteristic = getCharacteristicTypeFromString(input: perm) {
            return characteristic
        }

        switch perm {
        case "workout": return HKObjectType.workoutType()
        case "CDA": return HKObjectType.documentType(forIdentifier: .CDA)
        case "activitySummary": return HKObjectType.activitySummaryType()
        case "audiogram": return HKObjectType.audiogramSampleType()
        default: return nil
        }
    }

    func getWorkoutEventTypeFromString(input: String?) -> HKWorkoutEventType {
        switch input {
        case "lap": return .lap
        case "marker": return .marker
        case "motionPaused": return .motionPaused
        case "motionResumed": return .motionResumed
        case "pause": return .pause
        case "pauseOrResumeRequest": return .pauseOrResumeRequest
        case "resume": return .resume
        case "segment": return .segment
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
        case "dBASPL": return .decibelAWeightedSoundPressureLevel()
        case "dBHL": return .decibelHearingLevel()
        case "degC": return .degreeCelsius()
        case "degF": return .degreeFahrenheit()
        case "fl_oz_imp": return .fluidOunceImperial()
        case "fl_oz_us": return .fluidOunceUS()
        case "ft": return .foot()
        case "g": return .gram()
        case "kg": return .gramUnit(with: .kilo)
        case "mg": return .gramUnit(with: .milli)
        case "Hz": return .hertz()
        case "kHz": return .hertzUnit(with: .kilo)
        case "hr": return .hour()
        case "in": return .inch()
        case "IU": return .internationalUnit()
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
        case "cal": return .smallCalorie()
        case "st": return .stone()
        case "yd": return .yard()
        case "mmol/L": return HKUnit.moleUnit(with: .milli, molarMass: HKUnitMolarMassBloodGlucose).unitDivided(by: .liter())
        case "mg/dL": return HKUnit(from: "mg/dL")
        }
    }

    func parsePermissions(_ permissions: [String]) -> Set<HKObjectType> {
        Set(permissions.map { (perm) -> HKObjectType in
            getObjectTypeFromString(perm)
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
