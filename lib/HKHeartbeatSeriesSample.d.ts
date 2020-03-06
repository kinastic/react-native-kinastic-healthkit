import { HKSeriesSample } from "./HKSeriesSample";
import { HKHeartbeatEntry } from "./HKHeartbeatEntry";
export declare class HKHeartbeatSeriesSample extends HKSeriesSample {
    data: HKHeartbeatEntry[];
    constructor(json?: any);
    toJS(): any;
}
