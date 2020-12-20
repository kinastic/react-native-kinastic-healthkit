import { HKSample, HKSampleJson } from './HKSample';
import { EntityType } from './EntityType';

export type HKDocumentSampleJson = HKSampleJson & {

};

export class HKDocumentSample extends HKSample {
  constructor(json?: Partial<HKDocumentSampleJson>) {
    super(json);
  }

  toJS(): HKDocumentSampleJson {
    return super.toJS();
  }

  static build(): HKDocumentSample {
    return new HKDocumentSample({
      entityType: EntityType.document,
    });
  }
}
