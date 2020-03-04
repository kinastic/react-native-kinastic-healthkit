import { HKQuery } from './HKQuery';
import { NSSortDescriptor } from './NSSortDescriptor';
import {HKSampleType} from "./HKSampleType";
import { NSPredicate } from "./NSPredicate";

export class HKSampleQuery extends HKQuery<HKSampleType> {
  limit: number = 0;
  sort?: NSSortDescriptor[];

  constructor(sampleType: HKSampleType, predicate?: NSPredicate, limit?: number, sort?: NSSortDescriptor[]) {
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
