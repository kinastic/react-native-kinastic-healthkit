//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {
    func parseISO8601DateFromString(_ dateString: String?, withDefault: Date? = nil) -> Date? {
        if let input = dateString {
            let formatter = DateFormatter()
            formatter.dateFormat = iso8061Format
            if let date = formatter.date(from: input) {
                return date
            }
        }
        return nil
    }

    func buildISO8601StringFromDate(_ date: Date?) -> String? {
        if let input = date {
            let formatter = DateFormatter()
            formatter.dateFormat = iso8061Format
            return formatter.string(from: input)
        }
        return nil
    }

    func predicateForSamplesOnDay(_ date: Date) -> NSPredicate {
        let calendar = Calendar.current
        let startDate = calendar.startOfDay(for: date)
        if let endDate = calendar.date(byAdding: .day, value: 1, to: startDate) {
            return self.predicateForSamplesBetweenDates(startDate: startDate, endDate: endDate)
        }
        return predicateForSamplesBetweenDates(startDate: startDate, endDate: startDate)
    }

    func predicateForSamplesBetweenDates(startDate: Date, endDate: Date?) -> NSPredicate {
        HKQuery.predicateForSamples(withStart: startDate, end: endDate ?? startDate, options: .strictStartDate)
    }
}
