import HKQuery from './HKQuery';
import { HKDocumentType } from './HKDocumentType';
import NSSortDescriptor from './NSSortDescriptor';
import NSPredicate from './NSPredicate';

export default class HKDocumentQuery extends HKQuery<HKDocumentType> {
  limit: number = 0;
  sort?: NSSortDescriptor[];
  includeDocumentData: boolean = false;

  constructor(
    sampleType: HKDocumentType,
    predicate?: NSPredicate,
    limit?: number,
    sort?: NSSortDescriptor[],
    includeDocumentData?: boolean,
  ) {
    super(sampleType, predicate);

    this.limit = limit || 0;
    this.sort = sort ? sort.map((s: any) => new NSSortDescriptor(s)) : undefined;
    this.includeDocumentData = includeDocumentData || false;
  }
}
