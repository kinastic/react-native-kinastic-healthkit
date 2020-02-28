//
// Created by neo on 28.02.20.
// Copyright (c) 2020 Facebook. All rights reserved.
//

import Foundation
import HealthKit

extension KinasticHealthkit {

    @objc(save:resolve:reject:)
    func save(_ samples: [[String: Any]], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        let objects = samples.map { dictionary -> HKObject? in
            parseSample(dictionary)
        }.compactMap { $0 }

        if !objects.isEmpty {
            self.healthKit.save(objects) { (b: Bool, error: Error?) -> Void in
                if (b) {
                    resolve("success")
                } else {
                    reject("error", "Error: \(error?.localizedDescription)", error)
                }
            }
        } else {
            reject("error", "empty", nil)
        }
    }
}
