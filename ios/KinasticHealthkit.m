#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(KinasticHealthkit, NSObject)
    
RCT_EXTERN_METHOD(isAvailable:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(initHealthKit:(NSDictionary *)options resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(requestAuthorization:(NSArray *)readPermissionsString writePermissionsString:(NSArray *)writePermissionsString resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(authorizationStatus:(NSArray *)permissions resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)

RCT_EXTERN_METHOD(deleteObject:(NSDictionary *)samples resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(deleteObjectOf:(NSDictionary *)samples resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(deleteObjects:(NSarray *)samples resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(save:(NSArray *)samples resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(saveQuantity:(NSArray *)samples resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(saveCategory:(NSArray *)samples resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(saveCorrelation:(NSArray *)samples resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(saveWorkout:(NSArray *)samples resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)

RCT_EXTERN_METHOD(querySample:(NSDictionary *)query resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(querySampleByWorkout:(NSDictionary *)query resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(queryCorrelation:(NSDictionary *)query resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(queryDocument:(NSDictionary *)query resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(querySource:(NSDictionary *)query resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(queryWorkoutRoute:(NSDictionary *)query resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(queryAnchored:(NSDictionary *)query resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)

RCT_EXTERN_METHOD(queryObserver:(NSString *)sampleTypeString predicate:(NSDictionary *)predicate resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(completeTask:(NSString *)taskId)

RCT_EXTERN_METHOD(enableBackgroundDelivery:(NSString *)objectType frequency:(NSString *)frequency resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(disableBackgroundDelivery:(NSString *)NSString resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(disableAllBackgroundDelivery:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)

RCT_EXTERN_METHOD(getBiologicalSex:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(getBloodType:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(getDateOfBirth:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(getEarliestPermittedSampleDate:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(getFitzpatrickSkinType:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)
RCT_EXTERN_METHOD(getWheelchairUse:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock) reject)

@end
