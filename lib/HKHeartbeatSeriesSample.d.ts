import { HKSeriesSample, HKSeriesSampleJson } from "./HKSeriesSample";
import { HKHeartbeatEntry, HKHeartbeatEntryJson } from "./HKHeartbeatEntry";
export declare type HKHeartbeatSeriesSampleJson = HKSeriesSampleJson & {
    data: HKHeartbeatEntryJson[];
};
export declare class HKHeartbeatSeriesSample extends HKSeriesSample {
    data: HKHeartbeatEntry[];
    constructor(json?: Partial<HKHeartbeatSeriesSampleJson>);
    toJS(): HKHeartbeatSeriesSampleJson;
}
