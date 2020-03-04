import { HKQuery } from './HKQuery';
import { HKDocumentType } from './HKDocumentType';
import { NSSortDescriptor } from './NSSortDescriptor';
import { NSPredicate } from './NSPredicate';
export declare class HKDocumentQuery extends HKQuery<HKDocumentType> {
    limit: number;
    sort?: NSSortDescriptor[];
    includeDocumentData: boolean;
    constructor(sampleType: HKDocumentType, predicate?: NSPredicate, limit?: number, sort?: NSSortDescriptor[], includeDocumentData?: boolean);
}
