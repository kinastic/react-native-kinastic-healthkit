import HKSample from './HKSample';
import { HKCorrelationType } from './HKCorrelationType';
import HKMetadata from './HKMetadata';
export default class HKCorrelation extends HKSample {
    objects: HKSample[];
    constructor(json?: any);
    toJS(): any;
    static build(id: string, sampleType: HKCorrelationType, startDate: Date, endDate: Date, objects: HKSample[], metadata?: HKMetadata): HKCorrelation;
}
