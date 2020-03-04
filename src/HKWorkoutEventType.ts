enum HKWorkoutEventType {
  pause = 'pause',
  resume = 'resume',

  // iOS > 10.0
  lap = 'lap',

  // iOS > 10.0
  marker = 'marker',

  // iOS > 10.0
  motionPaused = 'motionPaused',

  // iOS > 10.0
  motionResumed = 'motionResumed',

  // iOS > 11.0
  segment = 'segment',

  // iOS > 11.0
  pauseOrResumeRequest = 'pauseOrResumeRequest',
}

export default HKWorkoutEventType;
