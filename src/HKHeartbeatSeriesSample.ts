import { HKSeriesSample } from "./HKSeriesSample";
import { HKHeartbeatEntry } from "./HKHeartbeatEntry";

export class HKHeartbeatSeriesSample extends HKSeriesSample {
    data: HKHeartbeatEntry[] = [];

    constructor(json?: any) {
        super(json);
        if (json) {
            this.data = (json.data || []).map((d: any) => new HKHeartbeatEntry(d));
        }
    }

    toJS(): any {
        return Object.assign(super.toJS, {
            data: this.data.map((h: HKHeartbeatEntry) => h.toJS())
        });
    }
}