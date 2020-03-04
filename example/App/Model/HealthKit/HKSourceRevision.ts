import HKSource from './HKSource';

export default class HKSourceRevision {
  source: HKSource = new HKSource();
  version?: string;
  productType?: string;
  operatingSystemVersion: string = '';

  constructor(json?: any) {
    if (json) {
      this.source = new HKSource(json.source);
      this.version = json.version;
      this.productType = json.productType;
      this.operatingSystemVersion = json.operatingSystemVersion;
    }
  }

  toJS(): any {
    return {
      source: this.source.toJS(),
      version: this.version,
      productType: this.productType,
      operatingSystemVersion: this.operatingSystemVersion,
    };
  }
}
