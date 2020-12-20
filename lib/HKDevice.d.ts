export declare type HKDeviceJson = {
    name?: string;
    manufacturer?: string;
    model?: string;
    hardwareVersion?: string;
    firmwareVersion?: string;
    softwareVersion?: string;
    localIdentifier?: string;
    udiDeviceIdentifier?: string;
};
export declare class HKDevice {
    name?: string;
    manufacturer?: string;
    model?: string;
    hardwareVersion?: string;
    firmwareVersion?: string;
    softwareVersion?: string;
    localIdentifier?: string;
    udiDeviceIdentifier?: string;
    constructor(json?: Partial<HKDeviceJson>);
    toJS(): HKDeviceJson;
}
