
export type HKHeartbeatEntryJson = {
    intervalSinceStart: number;
    precededByGap: boolean;
}

export class HKHeartbeatEntry {
    intervalSinceStart: number = 0;
    precededByGap: boolean = false;

    constructor(json?: Partial<HKHeartbeatEntryJson>) {
        if (json) {
            this.intervalSinceStart = json.intervalSinceStart ?? 0;
            this.precededByGap = json.precededByGap ?? false;
        }
    }

    toJS(): HKHeartbeatEntryJson {
        return {
            intervalSinceStart: this.intervalSinceStart,
            precededByGap: this.precededByGap,
        };
    }
}