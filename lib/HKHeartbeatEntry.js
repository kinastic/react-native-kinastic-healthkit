export class HKHeartbeatEntry {
    constructor(json) {
        this.intervalSinceStart = 0;
        this.precededByGap = false;
        if (json) {
            this.intervalSinceStart = json.intervalSinceStart || 0;
            this.precededByGap = json.precededByGap || false;
        }
    }
    toJS() {
        return {
            intervalSinceStart: this.intervalSinceStart,
            precededByGap: this.precededByGap,
        };
    }
}
//# sourceMappingURL=HKHeartbeatEntry.js.map