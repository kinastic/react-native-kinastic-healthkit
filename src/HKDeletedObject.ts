import { HKMetadata } from './HKMetadata';

export type HKDeletedObjectJson = {
  uuid: string;
  metadata?: HKMetadata;
}

export class HKDeletedObject {
  uuid: string = '';
  metadata?: HKMetadata;

  constructor(json?: Partial<HKDeletedObjectJson>) {
    if (json) {
      this.uuid = json.uuid ?? '';
      this.metadata = json.metadata;
    }
  }
}
