//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import KinasticHealthkit
import HealthKit

extension KinasticHealthkit {

    let iso8061Format = "yyyy-MM-ddTHH:mm:ss.SSSZ"

    func parseISO8601DateFromString(_ dateString: String?, withDefault: Date? = nil) -> Date? {
        if dateString {
            let formatter = DateFormatter()
            formatter.dateFormat = iso8061Format
            if let date = formatter.date(from: dateString) {
                return date
            }
        }
        return nil
    }

    func buildISO8601StringFromDate(_ date: Date?) -> String? {
        if date {
            let formatter = DateFormatter()
            formatter.dateFormat = iso8061Format
            if let dateString = formatter.string(from: date) {
                return dateString
            }
        }
        return nil
    }

    func predicateForSamplesOnDay(_ date: Date) -> NSPredicate {
        let calendar = Calendar.current
        let startDate = calendar.startOfDay(for: date)
        let endDate = calendar.date(byAdding: .day, value: 1, to: startDate)
        return self.predicateForSamplesBetweenDates(startDate: startDate, endDate: endDate)
    }

    func predicateForSamplesBetweenDates(startDate: Date, endDate: Date) -> NSPredicate {
        HKQuery.predicateForSamples(withStart: startDate, end: endDate, options: .strictStartDate)
    }
}