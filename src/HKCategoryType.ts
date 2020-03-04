export enum HKCategoryType {
  appleStandHour = 'appleStandHour',
  audioExposureEvent = 'audioExposureEvent',
  cervicalMucusQuality = 'cervicalMucusQuality',
  highHeartRateEvent = 'highHeartRateEvent',
  intermenstrualBleeding = 'intermenstrualBleeding',
  irregularHeartRhythmEvent = 'irregularHeartRhythmEvent',
  lowHeartRateEvent = 'lowHeartRateEvent',
  menstrualFlow = 'menstrualFlow',
  mindfulSession = 'mindfulSession',
  ovulationTestResult = 'ovulationTestResult',
  sexualActivity = 'sexualActivity',
  sleepAnalysis = 'sleepAnalysis',
  toothbrushingEvent = 'toothbrushingEvent',
}

export const HKCategoryTypes: string[] = Object.keys(HKCategoryType);
