export class HKDevice {
    constructor(json) {
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
    toJS() {
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
//# sourceMappingURL=HKDevice.js.map