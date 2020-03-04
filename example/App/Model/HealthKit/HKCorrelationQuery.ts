import HKQuery from './HKQuery';
import NSPredicate from './NSPredicate';
import { HKCorrelationType } from './HKCorrelationType';

export interface HKCorrelationQuerySamplePredicates {
  [key: string]: NSPredicate;
}

export class HKCorrelationQuery extends HKQuery<HKCorrelationType> {
  samplePredicates?: HKCorrelationQuerySamplePredicates;

  constructor(
    sampleType: HKCorrelationType,
    predicate?: NSPredicate,
    samplePredicates?: HKCorrelationQuerySamplePredicates,
  ) {
    super(sampleType, predicate);
    this.samplePredicates = samplePredicates
      ? Object.keys(samplePredicates).reduce((prev: any, curr: string) => {
          const entry = samplePredicates[curr];
          if (entry) {
            prev[curr] = new NSPredicate(entry);
          }
          return prev;
        }, {})
      : undefined;
  }

  toJS(): any {
    const { samplePredicates } = this;
    return Object.assign(super.toJS(), {
      samplePredicates: samplePredicates
        ? Object.keys(samplePredicates).reduce((prev: any, curr: string) => {
            const entry = samplePredicates[curr];
            if (entry) {
              prev[curr] = entry.toJS();
            }
            return prev;
          }, {})
        : undefined,
    });
  }
}
