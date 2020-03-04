export class CLLocation {
    constructor(json) {
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
    toJS() {
        return {
            alt: this.alt,
            lat: this.lat,
            lon: this.lon,
            couse: this.course,
            speed: this.speed,
            hAcc: this.hAcc,
            vAcc: this.vAcc,
            time: this.time.toISOString(),
        };
    }
}
//# sourceMappingURL=CLLocation.js.map