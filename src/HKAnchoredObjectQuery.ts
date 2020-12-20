import { HKSampleType } from './HKSampleType';
import { HKQuery, HKQueryJson } from './HKQuery';
import { NSPredicateJson } from './NSPredicate';

export type HKAnchoredObjectQueryJson = HKQueryJson<HKSampleType> & {
  limit: number;
  anchor?: number;
}

export class HKAnchoredObjectQuery extends HKQuery<HKSampleType> {
  limit: number = 0;
  anchor?: number;

  constructor(sampleType: HKSampleType, predicate?: NSPredicateJson, limit?: number, anchor?: number) {
    super(sampleType, predicate);

    this.limit = limit ?? 0;
    this.anchor = anchor;
  }

  toJS(): HKAnchoredObjectQueryJson {
    return Object.assign(super.toJS(), {
      limit: this.limit,
      anchor: this.anchor,
    });
  }
}
