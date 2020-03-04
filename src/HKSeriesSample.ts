import { HKSample } from './HKSample';

export class HKSeriesSample extends HKSample {
  count: number = 0;

  constructor(json?: any) {
    super(json);

    if (json) {
      this.count = json.count || 0;
    }
  }

  toJS(): any {
    return Object.assign(super.toJS(), {
      count: this.count,
    });
  }
}
