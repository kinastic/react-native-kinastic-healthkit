import { HKSample, HKSampleJson } from './HKSample';
import { HKQuantityType } from './HKQuantityType';
import { HKMetadata } from './HKMetadata';
import { EntityType } from './EntityType';
import { HKMetadataKey } from './HKMetadataKey';

export type HKQuantitySampleJson = HKSampleJson & {
  value: number;
  unit?: string;
}

export class HKQuantitySample extends HKSample {
  value: number = 0;
  unit?: string;

  constructor(json?: Partial<HKQuantitySampleJson>) {
    super(json);

    if (json) {
      this.value = json.value ?? 0;
      this.unit = json.unit;
    }
  }

  toJS(): HKQuantitySampleJson {
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
    const metadataValues = Object.assign({}, {
      HKExternalUUID: id,
      [HKMetadataKey.HKMetadataKeySyncIdentifier]: id,
      [HKMetadataKey.HKMetadataKeySyncVersion]: 1.0,
    }, metadata ?? {});
    return new HKQuantitySample({
      entityType: EntityType.quantity,
      sampleType,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      value,
      metadata: metadataValues,
    });
  }
}
