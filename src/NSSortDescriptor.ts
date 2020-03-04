export default class NSSortDescriptor {
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
}
