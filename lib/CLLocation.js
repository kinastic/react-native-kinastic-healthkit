export class CLLocation {
    constructor(json) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.hAcc = -1;
        this.vAcc = -1;
        this.course = -1;
        this.speed = -1;
        this.lat = 0;
        this.lon = 0;
        this.time = new Date();
        if (json) {
            this.alt = (_a = json.alt) !== null && _a !== void 0 ? _a : 0;
            this.hAcc = (_b = json.hAcc) !== null && _b !== void 0 ? _b : -1;
            this.vAcc = (_c = json.vAcc) !== null && _c !== void 0 ? _c : -1;
            this.course = (_d = json.course) !== null && _d !== void 0 ? _d : -1;
            this.speed = (_e = json.speed) !== null && _e !== void 0 ? _e : -1;
            this.lat = (_f = json.lat) !== null && _f !== void 0 ? _f : 0;
            this.lon = (_g = json.lon) !== null && _g !== void 0 ? _g : 0;
            this.time = json.time ? new Date(json.time) : new Date();
        }
    }
    toJS() {
        return {
            alt: this.alt,
            lat: this.lat,
            lon: this.lon,
            course: this.course,
            speed: this.speed,
            hAcc: this.hAcc,
            vAcc: this.vAcc,
            time: this.time.toISOString(),
        };
    }
}
//# sourceMappingURL=CLLocation.js.map