import { EntityType } from './EntityType';
import { HKSample, HKSampleJson } from './HKSample';

export type HKCategorySampleJson = HKSampleJson & {
  value: number;
}

export class HKCategorySample extends HKSample {
  value: number = 0;

  constructor(json?: Partial<HKCategorySampleJson>) {
    super(json);
    if (json) {
      this.value = json.value ?? 0;
    }
  }

  toJS(): HKCategorySampleJson {
    return Object.assign(super.toJS(), {
      value: this.value,
    });
  }

  static build(value: number): HKCategorySample {
    return new HKCategorySample({
      entityType: EntityType.category,
      value: value,
    });
  }
}
