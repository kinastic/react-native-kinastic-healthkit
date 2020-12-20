import { HKSample, HKSampleJson } from './HKSample';
import { HKDeletedObject, HKDeletedObjectJson } from './HKDeletedObject';
import { HKSampleBuilder } from './HKSampleBuilder';
import { notUndefined } from './notUndefined';

export type HKAnchoredObjectQueryResultJson = {
  samples: HKSampleJson[];
  deleted: HKDeletedObjectJson[];
  anchor?: any;
}

export class HKAnchoredObjectQueryResult {
  samples: HKSample[] = [];
  deleted: HKDeletedObject[] = [];
  anchor?: any;

  constructor(json?: Partial<HKAnchoredObjectQueryResultJson>) {
    if (json) {
      this.samples = (json.samples ?? []).map((s: any) => HKSampleBuilder.build(s)).filter(notUndefined);
      this.deleted = (json.deleted ?? []).map((d: any) => new HKDeletedObject(d));
      this.anchor = json.anchor;
    }
  }
}
