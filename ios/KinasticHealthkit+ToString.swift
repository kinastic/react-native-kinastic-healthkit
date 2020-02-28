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
        }
    }

    func unitString(unit: HKUnit) -> String {
        unit.unitString
    }

    func quantityTypeToString(value: HKQuantityType) -> String {
        value.identifier
    }

    func correlationTypeToString(value: HKCorrelationType) -> String {
        value.identifier
    }

    func operatingSystemVersionToString(version: OperatingSystemVersion) -> String {
        "\(version.majorVersion).\(version.minorVersion).\(version.patchVersion)"
    }
}