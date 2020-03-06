
export class HKHeartbeatEntry {
    intervalSinceStart: number = 0;
    precededByGap: boolean = false;

    constructor(json?: any) {
        if (json) {
            this.intervalSinceStart = json.intervalSinceStart || 0;
            this.precededByGap = json.precededByGap || false;
        }
    }

    toJS(): any {
        return {
            intervalSinceStart: this.intervalSinceStart,
            precededByGap: this.precededByGap,
        };
    }
}