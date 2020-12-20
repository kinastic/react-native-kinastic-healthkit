export type HKDeviceJson = {
  name?: string;
  manufacturer?: string;
  model?: string;
  hardwareVersion?: string;
  firmwareVersion?: string;
  softwareVersion?: string;
  localIdentifier?: string;
  udiDeviceIdentifier?: string;
}

export class HKDevice {
  name?: string;
  manufacturer?: string;
  model?: string;
  hardwareVersion?: string;
  firmwareVersion?: string;
  softwareVersion?: string;
  localIdentifier?: string;
  udiDeviceIdentifier?: string;

  constructor(json?: Partial<HKDeviceJson>) {
    if (json) {
      this.name = json.name;
      this.manufacturer = json.manufacturer;
      this.hardwareVersion = json.hardwareVersion;
      this.firmwareVersion = json.firmwareVersion;
      this.softwareVersion = json.softwareVersion;
      this.localIdentifier = json.localIdentifier;
      this.udiDeviceIdentifier = json.udiDeviceIdentifier;
    }
  }

  toJS(): HKDeviceJson {
    return {
      name: this.name,
      manufacturer: this.manufacturer,
      hardwareVersion: this.hardwareVersion,
      firmwareVersion: this.firmwareVersion,
      softwareVersion: this.softwareVersion,
      localIdentifier: this.localIdentifier,
      udiDeviceIdentifier: this.udiDeviceIdentifier,
    };
  }
}
