export declare class HKDevice {
    name?: string;
    manufacturer?: string;
    model?: string;
    hardwareVersion?: string;
    firmwareVersion?: string;
    softwareVersion?: string;
    localIdentifier?: string;
    udiDeviceIdentifier?: string;
    constructor(json?: any);
    toJS(): any;
}
