import HKSample from './HKSample';
export default class HKCategorySample extends HKSample {
    value: number;
    constructor(json?: any);
    toJS(): any;
    static build(value: number): HKCategorySample;
}
