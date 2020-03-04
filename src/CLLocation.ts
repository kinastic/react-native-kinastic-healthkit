
export default class CLLocation {
    alt?: number;
    hAcc?: number = -1;
    vAcc?: number = -1;
    course?: number = -1;
    speed?: number = -1;
    lat: number = 0;
    lon: number = 0;
    time: Date = new Date();

    constructor(json?: any) {
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

    toJS(): any {
        return {
            alt: this.alt,
            lat: this.lat,
            lon: this.lon,
            couse: this.course,
            speed: this.speed,
            hAcc: this.hAcc,
            vAcc: this.vAcc,
            time: this.time.toISOString()
        }
    }
}
