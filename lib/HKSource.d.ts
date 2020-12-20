export declare type HKSourceJson = {
    name: string;
    bundleIdentifier: string;
};
export declare class HKSource {
    name: string;
    bundleIdentifier: string;
    constructor(json?: Partial<HKSourceJson>);
    toJS(): HKSourceJson;
}
