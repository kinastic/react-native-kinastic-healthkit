import { HKQuery, HKQueryJson } from './HKQuery';
import { HKDocumentType } from './HKDocumentType';
import { NSSortDescriptor, NSSortDescriptorJson } from './NSSortDescriptor';
import { NSPredicateJson } from './NSPredicate';

export type HKDocumentQueryJson = HKQueryJson<HKDocumentType> & {
  limit: number;
  sort?: NSSortDescriptorJson[];
  includeDocumentData: boolean;
}

export class HKDocumentQuery extends HKQuery<HKDocumentType> {
  limit: number = 0;
  sort?: NSSortDescriptor[];
  includeDocumentData: boolean = false;

  constructor(
    sampleType: HKDocumentType,
    predicate?: NSPredicateJson,
    limit?: number,
    sort?: NSSortDescriptorJson[],
    includeDocumentData?: boolean,
  ) {
    super(sampleType, predicate);

    this.limit = limit || 0;
    this.sort = sort ? sort.map((s) => new NSSortDescriptor(s)) : undefined;
    this.includeDocumentData = includeDocumentData || false;
  }
}
