import HKSample from './HKSample';
import HKDeletedObject from './HKDeletedObject';
import HKSampleBuilder from './HKSampleBuilder';

export class HKAnchoredObjectQueryResult {
  samples: HKSample[] = [];
  deleted: HKDeletedObject[] = [];
  anchor?: any;

  constructor(json?: any) {
    if (json) {
      this.samples = (json.samples || []).map((s: any) => HKSampleBuilder.build(s));
      this.deleted = (json.deleted || []).map((d: any) => new HKDeletedObject(d));
      this.anchor = json.anchor;
    }
  }
}
