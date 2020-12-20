import { HKQuery } from './HKQuery';
import { NSSortDescriptor, NSSortDescriptorJson } from './NSSortDescriptor';
import { HKSampleType } from "./HKSampleType";
import { NSPredicateJson } from "./NSPredicate";

export class HKSampleQuery extends HKQuery<HKSampleType> {
  limit: number = 0;
  sort?: NSSortDescriptor[];

  constructor(sampleType: HKSampleType, predicate?: NSPredicateJson, limit?: number, sort?: NSSortDescriptorJson[]) {
    super(sampleType, predicate);

    this.limit = limit || 0;
    this.sort = sort ? sort.map((s: any) => new NSSortDescriptor(s)) : undefined;
  }

  toJS(): any {
    return Object.assign(super.toJS(), {
      limit: this.limit,
      sort: this.sort ? this.sort.map((s: NSSortDescriptor) => s.toJS()) : undefined,
    });
  }
}
