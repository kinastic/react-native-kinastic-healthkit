//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    func parseActivityType(sample: [String: Any?]) -> HKWorkoutActivityType? {
        guard self.getActivityTypeFromString(input: sample["activityType"]) else {
            print("Invalid 'activityType' from HKWorkoutActivityType")
            return nil
        }
    }

    func parseWorkoutEvents(sample: [String: Any?]) -> [HKWorkoutEvent]? {
        if let events = sample["workoutEvents"] as? Array {
            return events.map { parseEvent(input: $0) }
        }
        return nil
    }

    func parseEvent(input: Any?) -> HKWorkoutEvent? {
        if let sample = input as? Dictionary {
            guard let eventType = getWorkoutEventTypeFromString(sample["type"]) else {
                print("Missing 'type' of HKWorkoutEventType'")
                return nil
            }
            guard let startDate = parseISO8601DateFromString(sample["startDate"]) else {
                print("Missing 'startDate'")
            }

            let endDate = parseISO8601DateFromString(sample["endDate"])
            let metadata = sample["metadata"]

            if endDate {
                let interval = DateInterval(start: startDate, end: endDate)
                return HKWorkoutEvent(type: eventType, dateInterval: interval, metadata: metadata)
            } else {
                return HKWorkoutEvent(type: eventType, date: startDate, metadata: metadata)
            }
        }
        return nil
    }

    func parseWorkoutTotal(value: Any?) -> HKQuantity? {
        if let dict = valus as? Dictionary {
            return parseQuantity(input: dict)
        }
        return nil
    }

    func parseTotalEnergyBurned(sample: [String: Any?]) -> HKQuantity? {
        parseWorkoutTotal(value: sample["totalEnergyBurned"])
    }

    func parseTotalFlightsClimbed(sample: [String: Any?]) -> HKQuantity? {
        parseWorkoutTotal(value: sample["totalFlightsClimbed"])
    }

    func parseTotalSwimmingStrokeCount(sample: [String: Any?]) -> HKQuantity? {
        parseWorkoutTotal(value: sample["totalSwimmingStrokeCount"])
    }

    func parseTotalDistance(sample: [String: Any?]) -> HKQuantity? {
        parseWorkoutTotal(value: sample["totalDistance"])
    }

    func parseSampleWorkout(sample: [String: Any?]) -> HKWorkout? {

        guard let type = parseActivityType(sample: sample) else {
            return nil
        }

        guard let startDate = parseStartDate(sample: sample) else {
            return nil
        }

        let totalEnergyBurned = parseTotalEnergyBurned(sample: sample)
        let totalFlightsClimbed = parseTotalFlightsClimbed(sample: sample)
        let totalSwimmingStrokeCount = parseTotalEnergyBurned(sample: sample)
        let totalDistance = parseTotalDistance(sample: sample)

        let workoutEvents = parseWorkoutEvents(sample: sample)
        var endDate = self.parseISO8601DateFromString(sample["endDate"], withDefault: startDate)

        if startDate > endDate {
            endDate = startDate
        }

        let device = parseDevice(sample["device"])
        let metadata = sample["metadata"]

        let workout = HKWorkout(activityType: type, start: startDate, end: endDate)
        workout.totalSwimmingStrokeCount = totalSwimmingStrokeCount
        workout.totalFlightsClimbed = totalFlightsClimbed
        workout.totalDistance = totalDistance
        workout.totalEnergyBurned = totalEnergyBurned
        workout.workoutEvents = workoutEvents
        workout.device = device
        workout.metadata = metadata

        return workout
    }
}