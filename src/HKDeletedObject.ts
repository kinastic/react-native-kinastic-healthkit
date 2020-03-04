import { HKMetadata } from './HKMetadata';

export class HKDeletedObject {
  uuid: string = '';
  metadata?: HKMetadata;

  constructor(json?: any) {
    if (json) {
      this.uuid = json.uuid;
      this.metadata = json.metadata;
    }
  }
}
