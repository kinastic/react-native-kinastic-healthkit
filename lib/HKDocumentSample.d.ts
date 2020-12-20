import { HKSample, HKSampleJson } from './HKSample';
export declare type HKDocumentSampleJson = HKSampleJson & {};
export declare class HKDocumentSample extends HKSample {
    constructor(json?: Partial<HKDocumentSampleJson>);
    toJS(): HKDocumentSampleJson;
    static build(): HKDocumentSample;
}
