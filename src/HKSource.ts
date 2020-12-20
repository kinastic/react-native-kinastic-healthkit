export type HKSourceJson = {
  name: string;
  bundleIdentifier: string;
}

export class HKSource {
  name: string = '';
  bundleIdentifier: string = '';

  constructor(json?: Partial<HKSourceJson>) {
    if (json) {
      this.name = json.name ?? '';
      this.bundleIdentifier = json.bundleIdentifier ?? '';
    }
  }

  toJS(): HKSourceJson {
    return {
      name: this.name,
      bundleIdentifier: this.bundleIdentifier,
    };
  }
}
