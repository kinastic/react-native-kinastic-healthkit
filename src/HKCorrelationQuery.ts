import { HKCorrelationType } from './HKCorrelationType';
import { NSPredicate, NSPredicateJson } from './NSPredicate';
import { HKQuery, HKQueryJson } from './HKQuery';

export type HKCorrelationQuerySamplePredicatesJson = {
  [key: string]: NSPredicateJson;
}

export type HKCorrelationQuerySamplePredicates = {
  [key: string]: NSPredicate;
}

export type HKCorrelationQueryJson = HKQueryJson<HKCorrelationType> & {
  samplePredicates?: HKCorrelationQuerySamplePredicatesJson;
}

export class HKCorrelationQuery extends HKQuery<HKCorrelationType> {
  samplePredicates?: HKCorrelationQuerySamplePredicates;

  constructor(
    sampleType: HKCorrelationType,
    predicate?: NSPredicateJson,
    samplePredicates?: HKCorrelationQuerySamplePredicatesJson,
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

  toJS(): HKCorrelationQueryJson {
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
