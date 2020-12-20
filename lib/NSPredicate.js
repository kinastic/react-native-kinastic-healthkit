import { NSPredicateType } from './NSPredicateType';
import { HKSource } from './HKSource';
import { HKWorkout } from './HKWorkout';
import { HKDevice } from './HKDevice';
import { HKSourceRevision } from './HKSourceRevision';
export class NSPredicate {
    constructor(json) {
        var _a;
        this.type = NSPredicateType.quantitySamples;
        if (json) {
            this.type = (_a = json.type) !== null && _a !== void 0 ? _a : NSPredicateType.quantitySamples;
            this.operator = json.operator;
            this.value = json.value;
            this.fhirResourceType = json.fhirResourceType;
            this.source = json.source ? new HKSource(json.source) : undefined;
            this.identifier = json.identifier;
            this.uuid = json.uuid;
            this.workout = json.workout ? new HKWorkout(json.workout) : undefined;
            this.device = json.device ? json.device.map((d) => new HKDevice(d)) : undefined;
            this.sourceRevisions = json.sourceRevisions
                ? json.sourceRevisions.map((s) => new HKSourceRevision(s))
                : undefined;
            this.uuids = json.uuids;
            this.deviceProperty = json.deviceProperty;
            this.allowedValues = json.allowedValues;
            this.metadataKey = json.metadataKey;
            this.unit = json.unit;
            this.startDate = json.startDate ? new Date(json.startDate) : undefined;
            this.endDate = json.endDate ? new Date(json.endDate) : undefined;
            this.options = json.options;
            this.duration = json.duration;
            this.activityType = json.activityType;
            this.totalDistance = json.totalDistance;
            this.totalEnergyBurned = json.totalEnergyBurned;
            this.totalSwimmingStrokeCount = json.totalSwimmingStrokeCount;
            this.totalFlightsClimbed = json.totalFlightsClimbed;
        }
    }
    toJS() {
        return {
            type: this.type,
            operator: this.operator,
            value: this.value,
            fhirResourceType: this.fhirResourceType,
            source: this.source ? this.source.toJS() : undefined,
            identifier: this.identifier,
            uuid: this.uuid,
            workout: this.workout ? this.workout.toJS() : undefined,
            device: this.device ? this.device.map((d) => d.toJS()) : undefined,
            sourceRevisions: this.sourceRevisions
                ? this.sourceRevisions.map((s) => s.toJS())
                : undefined,
            uuids: this.uuids,
            deviceProperty: this.deviceProperty,
            allowedValues: this.allowedValues,
            metadataKey: this.metadataKey,
            unit: this.unit,
            startDate: this.startDate ? this.startDate.toISOString() : undefined,
            endDate: this.endDate ? this.endDate.toISOString() : undefined,
            options: this.options,
            duration: this.duration,
            activityType: this.activityType,
            totalDistance: this.totalDistance,
            totalEnergyBurned: this.totalEnergyBurned,
            totalSwimmingStrokeCount: this.totalSwimmingStrokeCount,
            totalFlightsClimbed: this.totalFlightsClimbed,
        };
    }
}
//# sourceMappingURL=NSPredicate.js.map