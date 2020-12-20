export declare type HKHeartbeatEntryJson = {
    intervalSinceStart: number;
    precededByGap: boolean;
};
export declare class HKHeartbeatEntry {
    intervalSinceStart: number;
    precededByGap: boolean;
    constructor(json?: Partial<HKHeartbeatEntryJson>);
    toJS(): HKHeartbeatEntryJson;
}
