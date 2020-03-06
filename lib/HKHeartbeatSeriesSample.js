import { HKSeriesSample } from "./HKSeriesSample";
import { HKHeartbeatEntry } from "./HKHeartbeatEntry";
export class HKHeartbeatSeriesSample extends HKSeriesSample {
    constructor(json) {
        super(json);
        this.data = [];
        if (json) {
            this.data = (json.data || []).map((d) => new HKHeartbeatEntry(d));
        }
    }
    toJS() {
        return Object.assign(super.toJS, {
            data: this.data.map((h) => h.toJS())
        });
    }
}
//# sourceMappingURL=HKHeartbeatSeriesSample.js.map