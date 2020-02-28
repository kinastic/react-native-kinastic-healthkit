//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    func parseActivityType(sample: [String: Any]) -> HKWorkoutActivityType? {
        if let input = sample["activityType"] as? String {
            return self.getActivityTypeFromString(input: input)
        }
        return nil
    }

    @available(iOS 10.0, *)
    func parseWorkoutEvents(sample: [String: Any]) -> [HKWorkoutEvent]? {
        if let events = sample["workoutEvents"] as? [Any] {
            return events.map { parseEvent(input: $0) }
        }
        return nil
    }

    @available(iOS 10.0, *)
    func parseEvent(input: Any?) -> HKWorkoutEvent? {
        if let sample = input as? [String: Any?] {
            guard let eventTypeString = sample["eventType"] as? String else {
                print("Missing 'eventType' of HKWorkoutEventType'")
            }
            
            guard let eventType = getWorkoutEventTypeFromString(input: eventTypeString) else {
                print("Missing 'eventType' of HKWorkoutEventType'")
                return nil
            }
            
            guard let startDateString = sample["startDate"] as? String else {
                print("Missing 'startDate'")
                return nil
            }
            
            guard let startDate = parseISO8601DateFromString(startDateString) else {
                print("Missing 'startDate'")
                return nil
            }

            let endDate = parseISO8601DateFromString(sample["endDate"] as? String) ?? startDate
            let metadata = sample["metadata"] as? [String: Any]

            if #available(iOS 11.0, *) {
                let interval = DateInterval(start: startDate, end: endDate)
                return HKWorkoutEvent(type: eventType, dateInterval: interval, metadata: metadata)
            } else if let metadata = sample["metadata"] as? [String: Any] {
                return HKWorkoutEvent(type: eventType, date: startDate, metadata: metadata)
            }
                  
            return HKWorkoutEvent(type: eventType, date: startDate)
        }
        return nil
    }

    func parseWorkoutTotal(value: Any?) -> HKQuantity? {
        if let dict = value as? [String: Any?] {
            return parseQuantity(input: dict)
        }
        return nil
    }

    func parseTotalEnergyBurned(sample: [String: Any]) -> HKQuantity? {
        parseWorkoutTotal(value: sample["totalEnergyBurned"])
    }

    func parseTotalFlightsClimbed(sample: [String: Any]) -> HKQuantity? {
        parseWorkoutTotal(value: sample["totalFlightsClimbed"])
    }

    func parseTotalSwimmingStrokeCount(sample: [String: Any]) -> HKQuantity? {
        parseWorkoutTotal(value: sample["totalSwimmingStrokeCount"])
    }

    func parseTotalDistance(sample: [String: Any]) -> HKQuantity? {
        parseWorkoutTotal(value: sample["totalDistance"])
    }

    func parseSampleWorkout(sample: [String: Any]) -> HKWorkout? {

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

        var endDate = self.parseISO8601DateFromString(sample["endDate"] as? String, withDefault: startDate) ?? startDate

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
        workout.device = device
        workout.metadata = metadata
        
        if #available(iOS 10.0, *) {
            workout.workoutEvents = parseWorkoutEvents(sample: sample)
        } else {
            // Fallback on earlier versions
        }

        return workout
    }
}
