import HKSample from './HKSample';
import { HKQuantityType } from './HKQuantityType';
import HKMetadata from './HKMetadata';
import { EntityType } from './EntityType';
import { HKMetadataKey } from './HKMetadataKey';

export class HKQuantitySample extends HKSample {
  value: number = 0;
  unit?: string;

  constructor(json?: any) {
    super(json);

    if (json) {
      this.value = json.value;
      this.unit = json.unit;
    }
  }

  toJS(): any {
    return Object.assign(super.toJS(), {
      value: this.value,
      unit: this.unit,
    });
  }

  static build(
    id: string,
    sampleType: HKQuantityType,
    startDate: Date,
    endDate: Date,
    value: number,
    metadata?: HKMetadata,
  ): HKQuantitySample {
    const metadataValues = Object.assign({}, metadata, {
      HKExternalUUID: id,
      [HKMetadataKey.HKMetadataKeySyncIdentifier]: id,
      [HKMetadataKey.HKMetadataKeySyncVersion]: 1.0,
    });
    return new HKQuantitySample({
      entityType: EntityType.quantity,
      sampleType,
      startDate,
      endDate,
      value,
      metadata: metadataValues,
    });
  }
}
