import HKSample from './HKSample';
export default class HKDocumentSample extends HKSample {
    constructor(json?: any);
    toJS(): any;
    static build(): HKDocumentSample;
}
