export declare class CLLocation {
    alt?: number;
    hAcc?: number;
    vAcc?: number;
    course?: number;
    speed?: number;
    lat: number;
    lon: number;
    time: Date;
    constructor(json?: any);
    toJS(): any;
}
