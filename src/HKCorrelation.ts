import { HKCorrelationType } from './HKCorrelationType';
import { HKMetadata } from './HKMetadata';
import { HKMetadataKey } from './HKMetadataKey';
import { EntityType } from './EntityType';
import { HKSample, HKSampleJson } from './HKSample';
import { HKSampleBuilder } from './HKSampleBuilder';
import { notUndefined } from './notUndefined';

export type HKCorrelationJson = HKSampleJson & {
  objects: HKSampleJson[];
}

export class HKCorrelation extends HKSample {
  objects: HKSample[] = [];

  constructor(json?: Partial<HKCorrelationJson>) {
    super(json);

    if (json) {
      this.objects = (json.objects || []).map((o) => HKSampleBuilder.build(o)).filter(notUndefined);
    }
  }

  toJS(): HKCorrelationJson {
    return Object.assign(super.toJS(), {
      objects: this.objects.map((o: HKSample) => o.toJS()),
    });
  }

  static build(
    id: string,
    sampleType: HKCorrelationType,
    startDate: Date,
    endDate: Date,
    objects: HKSample[],
    metadata?: HKMetadata,
  ): HKCorrelation {
    const metadataValues = Object.assign({}, metadata, {
      HKExternalUUID: id,
      [HKMetadataKey.HKMetadataKeySyncIdentifier]: id,
      [HKMetadataKey.HKMetadataKeySyncVersion]: 1.0,
    });
    return new HKCorrelation({
      entityType: EntityType.correlation,
      sampleType,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      objects: objects.map((o) => o.toJS()),
      metadata: metadataValues,
    });
  }
}
