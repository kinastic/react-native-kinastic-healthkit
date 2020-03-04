import HKSample from './HKSample';
import { EntityType } from './EntityType';

export class HKCategorySample extends HKSample {
  value: number = 0;

  constructor(json?: any) {
    super(json);
    if (json) {
      this.value = json.value;
    }
  }

  toJS(): any {
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
