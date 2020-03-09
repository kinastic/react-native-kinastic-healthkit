import { HKSampleType } from './HKSampleType';
import { HKObject } from './HKObject';
import { EntityType } from './EntityType';

export class HKSample extends HKObject {
  sampleType?: HKSampleType;

  // not from healthkit. Used to determine the right class.
  entityType: EntityType = EntityType.quantity;
  startDate: Date = new Date();
  endDate: Date = new Date();

  constructor(json?: any) {
    super(json);

    if (json) {
      this.entityType = json.entityType || EntityType.quantity;
      this.sampleType = json.sampleType;
      this.startDate = new Date(json.startDate);
      this.endDate = new Date(json.endDate);
    }
  }

  toJS(): any {
    return Object.assign(super.toJS(), {
      entityType: this.entityType,
      sampleType: this.sampleType,
      startDate: this.startDate.toISOString(),
      endDate: this.endDate.toISOString(),
    });
  }
}
