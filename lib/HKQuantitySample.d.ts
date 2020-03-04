import HKSample from './HKSample';
import { HKQuantityType } from './HKQuantityType';
import HKMetadata from './HKMetadata';
export default class HKQuantitySample extends HKSample {
    value: number;
    unit?: string;
    constructor(json?: any);
    toJS(): any;
    static build(id: string, sampleType: HKQuantityType, startDate: Date, endDate: Date, value: number, metadata?: HKMetadata): HKQuantitySample;
}
