export declare type CLLocationJson = {
    alt?: number;
    hAcc?: number;
    vAcc?: number;
    course?: number;
    speed?: number;
    lat: number;
    lon: number;
    time: string;
};
export declare class CLLocation {
    alt?: number;
    hAcc?: number;
    vAcc?: number;
    course?: number;
    speed?: number;
    lat: number;
    lon: number;
    time: Date;
    constructor(json?: Partial<CLLocationJson>);
    toJS(): CLLocationJson;
}
