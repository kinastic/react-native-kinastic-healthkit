import { HKSample, HKSampleJson } from './HKSample';

export type HKSeriesSampleJson = HKSampleJson & {
  count: number;
}

export class HKSeriesSample extends HKSample {
  count: number = 0;

  constructor(json?: Partial<HKSeriesSampleJson>) {
    super(json);

    if (json) {
      this.count = json.count || 0;
    }
  }

  toJS(): HKSeriesSampleJson {
    return Object.assign(super.toJS(), {
      count: this.count,
    });
  }
}
