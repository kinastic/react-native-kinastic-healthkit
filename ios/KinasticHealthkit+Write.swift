//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    @objc(save:reject:)
    func save(_ samples: [[String: Any?]]) {
        let objects = samples.map { dictionary -> HKObject? in
            parseSample(dictionary)
        }.compactMap { $0 }

        if !objects.isEmpty {
            self.healthKit.save(objects) { (b: Bool, error: Error?) -> Void in
                if (b) {
                    resolve("success")
                } else {
                    reject("Error: \(error?.localizedDescription)")
                }
            }
        } else {
            reject("empty")
        }
    }
}