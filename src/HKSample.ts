import { HKSampleType } from './HKSampleType';
import { HKObject, HKObjectJson } from './HKObject';
import { EntityType } from './EntityType';

export type HKSampleJson = HKObjectJson & {
  sampleType?: HKSampleType;
  entityType: EntityType;
  startDate: string;
  endDate: string;
}

export class HKSample extends HKObject {
  sampleType?: HKSampleType;

  // not from healthkit. Used to determine the right class.
  entityType: EntityType = EntityType.quantity;
  startDate: Date = new Date();
  endDate: Date = new Date();

  constructor(json?: Partial<HKSampleJson>) {
    super(json);

    if (json) {
      this.entityType = json.entityType || EntityType.quantity;
      this.sampleType = json.sampleType;
      this.startDate = json.startDate ? new Date(json.startDate) : new Date();
      this.endDate = json.endDate ? new Date(json.endDate) : new Date();
    }
  }

  toJS(): HKSampleJson {
    return Object.assign(super.toJS(), {
      entityType: this.entityType,
      sampleType: this.sampleType,
      startDate: this.startDate.toISOString(),
      endDate: this.endDate.toISOString(),
    });
  }
}
