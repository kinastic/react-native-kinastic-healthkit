import { HKSample } from './HKSample';
export class HKSeriesSample extends HKSample {
    constructor(json) {
        super(json);
        this.count = 0;
        if (json) {
            this.count = json.count || 0;
        }
    }
    toJS() {
        return Object.assign(super.toJS(), {
            count: this.count,
        });
    }
}
//# sourceMappingURL=HKSeriesSample.js.map