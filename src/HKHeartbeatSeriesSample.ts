import { HKSeriesSample, HKSeriesSampleJson } from "./HKSeriesSample";
import { HKHeartbeatEntry, HKHeartbeatEntryJson } from "./HKHeartbeatEntry";

export type HKHeartbeatSeriesSampleJson = HKSeriesSampleJson & {
    data: HKHeartbeatEntryJson[];
}

export class HKHeartbeatSeriesSample extends HKSeriesSample {
    data: HKHeartbeatEntry[] = [];

    constructor(json?: Partial<HKHeartbeatSeriesSampleJson>) {
        super(json);
        if (json) {
            this.data = (json.data || []).map((d) => new HKHeartbeatEntry(d));
        }
    }

    toJS(): HKHeartbeatSeriesSampleJson {
        return Object.assign(super.toJS(), {
            data: this.data.map((h) => h.toJS())
        });
    }
}