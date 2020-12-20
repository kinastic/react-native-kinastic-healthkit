export class HKHeartbeatEntry {
    constructor(json) {
        var _a, _b;
        this.intervalSinceStart = 0;
        this.precededByGap = false;
        if (json) {
            this.intervalSinceStart = (_a = json.intervalSinceStart) !== null && _a !== void 0 ? _a : 0;
            this.precededByGap = (_b = json.precededByGap) !== null && _b !== void 0 ? _b : false;
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