export default class HKSource {
  name: string = '';
  bundleIdentifier: string = '';

  constructor(json?: any) {
    if (json) {
      this.name = json.name;
      this.bundleIdentifier = json.bundleIdentifier;
    }
  }

  toJS(): any {
    return {
      name: this.name,
      bundleIdentifier: this.bundleIdentifier,
    };
  }
}
