"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HKDevice = /** @class */ (function () {
    function HKDevice(json) {
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
    HKDevice.prototype.toJS = function () {
        return {
            name: this.name,
            manufacturer: this.manufacturer,
            hardwareVersion: this.hardwareVersion,
            firmwareVersion: this.firmwareVersion,
            softwareVersion: this.softwareVersion,
            localIdentifier: this.localIdentifier,
            udiDeviceIdentifier: this.udiDeviceIdentifier,
        };
    };
    return HKDevice;
}());
exports.default = HKDevice;
