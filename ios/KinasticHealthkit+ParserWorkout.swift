//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit
import CoreLocation

extension KinasticHealthkit {

    func parseActivityType(sample: [String: Any?]) -> HKWorkoutActivityType? {
        if let input = sample["activityType"] as? String {
            return self.getActivityTypeFromString(input: input)
        }
        return nil
    }

    func parseWorkoutEvents(sample: [String: Any?]) -> [HKWorkoutEvent]? {
        if let events = sample["workoutEvents"] as? [Any] {
            return events.map {
                parseEvent(input: $0)
            }.compactMap {
                $0
            }
        }
        return nil
    }

    func parseEvent(input: Any?) -> HKWorkoutEvent? {
        if let sample = input as? [String: Any?] {
            guard let eventTypeString = sample["type"] as? String else {
                print("Missing 'type' of HKWorkoutEventType'")
                return nil
            }

            guard let eventType = getWorkoutEventTypeFromString(input: eventTypeString) else {
                print("Missing 'type' of HKWorkoutEventType'")
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
            } else if #available(iOS 10.0, *) {
                if let metadata = sample["metadata"] as? [String: Any] {
                    return HKWorkoutEvent(type: eventType, date: startDate, metadata: metadata)
                }
            }

            return HKWorkoutEvent(type: eventType, date: startDate)
        }
        return nil
    }

    func parseWorkoutTotal(value: Any?, unit: HKUnit) -> HKQuantity? {
        if let valueString = value as? String {
            if let doubleValue = Double(valueString) {
                return HKQuantity(unit: unit, doubleValue: doubleValue)
            }
        } else if let singleValue = value as? Double {
            return HKQuantity(unit: unit, doubleValue: singleValue)
        }
        return nil
    }

    func parseTotalEnergyBurned(sample: [String: Any?]) -> HKQuantity? {
        parseWorkoutTotal(value: sample["totalEnergyBurned"], unit: .kilocalorie())
    }

    func parseTotalFlightsClimbed(sample: [String: Any]) -> HKQuantity? {
        parseWorkoutTotal(value: sample["totalFlightsClimbed"], unit: .count())
    }

    func parseTotalSwimmingStrokeCount(sample: [String: Any]) -> HKQuantity? {
        parseWorkoutTotal(value: sample["totalSwimmingStrokeCount"], unit: .count())
    }

    func parseTotalDistance(sample: [String: Any]) -> HKQuantity? {
        parseWorkoutTotal(value: sample["totalDistance"], unit: .meter())
    }

    func parseWorkoutWithSamples(sample: [String: Any?]) -> HKWorkoutWithSamples? {
        guard let workout = parseSampleWorkout(sample: sample) else {
            print("Cannot parse workout")
            return nil
        }

        let samplesData = sample["samples"] as? [[String: Any?]]
        let samples = samplesData?.map {
            parseSample($0)
        }.compactMap {
            $0
        } ?? []
        let routeData = sample["route"] as? [[String: Any?]]
        let locations = routeData?.map {
            parseLocation(data: $0)
        }.compactMap {
            $0
        } ?? []

        return HKWorkoutWithSamples(workout: workout, samples: samples, locations: locations)
    }

    func parseLocation(data: [String: Any?]) -> CLLocation? {
        guard let lat = data["lat"] as? Double else {
            print("Missing 'lat'")
            return nil
        }
        guard let lon = data["lon"] as? Double else {
            print("Missing 'lon'")
            return nil
        }
        guard let time = parseISO8601DateFromString(data["time"] as? String) else {
            print("Missing 'time'")
            return nil
        }

        let hAcc = data["hAcc"] as? Double ?? -1
        let vAcc = data["vAcc"] as? Double ?? -1
        let speed = data["speed"] as? Double ?? 0
        let course = data["course"] as? Double ?? 0
        let alt = data["alt"] as? Double ?? 0

        return CLLocation(
                coordinate: CLLocationCoordinate2D(latitude: lat, longitude: lon),
                altitude: CLLocationDistance(alt),
                horizontalAccuracy: CLLocationAccuracy(hAcc),
                verticalAccuracy: CLLocationAccuracy(vAcc),
                course: CLLocationDirection(course),
                speed: CLLocationSpeed(speed),
                timestamp: time)
    }

    func parseSampleWorkout(sample: [String: Any?]) -> HKWorkout? {
        guard let type = parseActivityType(sample: sample) else {
            return nil
        }

        guard let startDate = parseStartDate(sample: sample) else {
            return nil
        }

        let workoutEvents = parseWorkoutEvents(sample: sample)
        let totalEnergyBurned = parseTotalEnergyBurned(sample: sample)

        let totalDistance = parseTotalDistance(sample: sample)

        var endDate = self.parseISO8601DateFromString(sample["endDate"] as? String, withDefault: startDate) ?? startDate

        if startDate > endDate {
            endDate = startDate
        }
        
        if (endDate.timeIntervalSince1970 - startDate.timeIntervalSince1970 >= 345600.000000) {
            return nil
        }

        let device = parseDevice(sample["device"])
        let metadata = sample["metadata"] as? [String: Any]

        //        HKWorkout(activityType: <#T##HKWorkoutActivityType#>, start: <#T##Date#>, end: <#T##Date#>)
        //        HKWorkout(activityType: <#T##HKWorkoutActivityType#>, start: <#T##Date#>, end: <#T##Date#>, duration: <#T##TimeInterval#>, totalEnergyBurned: <#T##HKQuantity?#>, totalDistance: <#T##HKQuantity?#>, device: <#T##HKDevice?#>, metadata: <#T##[String : Any]?#>)
        //        HKWorkout(activityType: <#T##HKWorkoutActivityType#>, start: <#T##Date#>, end: <#T##Date#>, duration: <#T##TimeInterval#>, totalEnergyBurned: <#T##HKQuantity?#>, totalDistance: <#T##HKQuantity?#>, metadata: <#T##[String : Any]?#>)
        //        HKWorkout(activityType: <#T##HKWorkoutActivityType#>, start: <#T##Date#>, end: <#T##Date#>, workoutEvents: <#T##[HKWorkoutEvent]?#>, totalEnergyBurned: <#T##HKQuantity?#>, totalDistance: <#T##HKQuantity?#>, metadata: <#T##[String : Any]?#>)

        if #available(iOS 10.0, *) {
            if #available(iOS 11.0, *) {
                if let totalFlightsClimbed = parseTotalFlightsClimbed(sample: sample) {
                    return HKWorkout(activityType: type, start: startDate, end: endDate, workoutEvents: workoutEvents, totalEnergyBurned: totalEnergyBurned, totalDistance: totalDistance, totalFlightsClimbed: totalFlightsClimbed, device: device, metadata: metadata)
                }
            }
            if let totalSwimmingStrokeCount = parseTotalSwimmingStrokeCount(sample: sample) {
                return HKWorkout(activityType: type, start: startDate, end: endDate, workoutEvents: workoutEvents, totalEnergyBurned: totalEnergyBurned, totalDistance: totalDistance, totalSwimmingStrokeCount: totalSwimmingStrokeCount, device: device, metadata: metadata)
            }
        }

        return HKWorkout(activityType: type, start: startDate, end: endDate, workoutEvents: workoutEvents, totalEnergyBurned: totalEnergyBurned, totalDistance: totalDistance, device: device, metadata: metadata)
    }
}
