import { HKCorrelationType } from './HKCorrelationType';
import { HKMetadata } from './HKMetadata';
import { HKMetadataKey } from './HKMetadataKey';
import { EntityType } from './EntityType';
import { HKSample } from './HKSample';
import { HKSampleBuilder } from './HKSampleBuilder';

export class HKCorrelation extends HKSample {
  objects: HKSample[] = [];

  constructor(json?: any) {
    super(json);

    if (json) {
      this.objects = (json.objects || []).map((o: any) => HKSampleBuilder.build(o));
    }
  }

  toJS(): any {
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
      startDate,
      endDate,
      objects,
      metadata: metadataValues,
    });
  }
}
