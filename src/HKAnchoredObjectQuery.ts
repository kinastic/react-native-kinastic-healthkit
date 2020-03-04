import { HKSampleType } from './HKSampleType';
import { HKQuery } from './HKQuery';
import { NSPredicate } from './NSPredicate';

export class HKAnchoredObjectQuery extends HKQuery<HKSampleType> {
  limit: number = 0;
  anchor?: number;

  constructor(sampleType: HKSampleType, predicate?: NSPredicate, limit?: number, anchor?: number) {
    super(sampleType, predicate);

    this.limit = limit || 0;
    this.anchor = anchor;
  }

  toJS(): any {
    return {
      limit: this.limit,
      anchor: this.anchor,
    };
  }
}
