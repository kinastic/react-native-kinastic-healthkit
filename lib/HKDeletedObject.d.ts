import HKMetadata from './HKMetadata';
export default class HKDeletedObject {
    uuid: string;
    metadata?: HKMetadata;
    constructor(json?: any);
}
