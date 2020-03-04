import HKSample from './HKSample';
import { EntityType } from './EntityType';

export default class HKDocumentSample extends HKSample {
  constructor(json?: any) {
    super(json);
  }

  toJS(): any {
    return super.toJS();
  }

  static build(): HKDocumentSample {
    return new HKDocumentSample({
      entityType: EntityType.document,
    });
  }
}
