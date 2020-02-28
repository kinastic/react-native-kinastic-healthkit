#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(KinasticHealthkit, NSObject)
    
RCT_EXTERN_METHOD(isAvailable:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(initHealthKit:(NSDictionary *)options resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(save:(NSArray *)samples resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(querySample:(NSDictionary *)query resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(requestAuthorization:(NSArray *)readPermissionsString writePermissionsString:(NSArray *)writePermissionsString resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(authorizationStatus:(NSArray *)permissions resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(getBiologicalSex:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(getBloodType:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(getDateOfBirth:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(getEarliestPermittedSampleDate:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(getFitzpatrickSkinType:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(getWheelchairUse:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)

@end
