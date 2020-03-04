export var HKWorkoutEventType;
(function (HKWorkoutEventType) {
    HKWorkoutEventType["pause"] = "pause";
    HKWorkoutEventType["resume"] = "resume";
    // iOS > 10.0
    HKWorkoutEventType["lap"] = "lap";
    // iOS > 10.0
    HKWorkoutEventType["marker"] = "marker";
    // iOS > 10.0
    HKWorkoutEventType["motionPaused"] = "motionPaused";
    // iOS > 10.0
    HKWorkoutEventType["motionResumed"] = "motionResumed";
    // iOS > 11.0
    HKWorkoutEventType["segment"] = "segment";
    // iOS > 11.0
    HKWorkoutEventType["pauseOrResumeRequest"] = "pauseOrResumeRequest";
})(HKWorkoutEventType || (HKWorkoutEventType = {}));
//# sourceMappingURL=HKWorkoutEventType.js.map