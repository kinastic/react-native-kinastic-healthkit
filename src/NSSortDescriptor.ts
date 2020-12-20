export type NSSortDescriptorJson = {
  key: string;
  ascending: boolean;
}

export class NSSortDescriptor {
  key: string = 'startDate';
  ascending: boolean = true;

  constructor(json?: Partial<NSSortDescriptorJson>) {
    if (json) {
      this.key = json.key ?? 'startDate';
      this.ascending = json.ascending ?? true;
    }
  }

  toJS(): NSSortDescriptorJson {
    return {
      key: this.key,
      ascending: this.ascending,
    };
  }

  static build(sortKey: string = 'startDate', ascending: boolean = true): NSSortDescriptor {
    return new NSSortDescriptor({
      key: sortKey,
      ascending
    });
  }
}
