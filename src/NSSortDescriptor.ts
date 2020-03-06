export class NSSortDescriptor {
  key: string = 'startDate';
  ascending: boolean = true;

  constructor(json?: any) {
    if (json) {
      this.key = json.key;
      this.ascending = json.ascending;
    }
  }

  toJS(): any {
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
