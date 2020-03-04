import { HKSample } from './HKSample';
export declare class HKCategorySample extends HKSample {
    value: number;
    constructor(json?: any);
    toJS(): any;
    static build(value: number): HKCategorySample;
}
