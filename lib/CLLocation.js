"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CLLocation = /** @class */ (function () {
    function CLLocation(json) {
        this.hAcc = -1;
        this.vAcc = -1;
        this.course = -1;
        this.speed = -1;
        this.lat = 0;
        this.lon = 0;
        this.time = new Date();
        if (json) {
            this.alt = json.alt || 0;
            this.hAcc = json.hAcc || -1;
            this.vAcc = json.vAcc || -1;
            this.course = json.course;
            this.speed = json.speed;
            this.lat = json.lat || 0;
            this.lon = json.lon || 0;
            this.time = json.time || 0;
        }
    }
    CLLocation.prototype.toJS = function () {
        return {
            alt: this.alt,
            lat: this.lat,
            lon: this.lon,
            couse: this.course,
            speed: this.speed,
            hAcc: this.hAcc,
            vAcc: this.vAcc,
            time: this.time.toISOString()
        };
    };
    return CLLocation;
}());
exports.default = CLLocation;
