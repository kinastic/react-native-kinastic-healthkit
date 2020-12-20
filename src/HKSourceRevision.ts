import { HKSource, HKSourceJson } from './HKSource';

export type HKSourceRevisionJson = {
  source: HKSourceJson;
  version?: string;
  productType?: string;
  operatingSystemVersion: string;
}

export class HKSourceRevision {
  source: HKSource = new HKSource();
  version?: string;
  productType?: string;
  operatingSystemVersion: string = '';

  constructor(json?: Partial<HKSourceRevisionJson>) {
    if (json) {
      this.source = new HKSource(json.source);
      this.version = json.version;
      this.productType = json.productType;
      this.operatingSystemVersion = json.operatingSystemVersion ?? '';
    }
  }

  toJS(): HKSourceRevisionJson {
    return {
      source: this.source.toJS(),
      version: this.version,
      productType: this.productType,
      operatingSystemVersion: this.operatingSystemVersion,
    };
  }
}
