import { HKQuery, HKQueryJson } from './HKQuery';
import { HKDocumentType } from './HKDocumentType';
import { NSSortDescriptor, NSSortDescriptorJson } from './NSSortDescriptor';
import { NSPredicateJson } from './NSPredicate';
export declare type HKDocumentQueryJson = HKQueryJson<HKDocumentType> & {
    limit: number;
    sort?: NSSortDescriptorJson[];
    includeDocumentData: boolean;
};
export declare class HKDocumentQuery extends HKQuery<HKDocumentType> {
    limit: number;
    sort?: NSSortDescriptor[];
    includeDocumentData: boolean;
    constructor(sampleType: HKDocumentType, predicate?: NSPredicateJson, limit?: number, sort?: NSSortDescriptorJson[], includeDocumentData?: boolean);
}
