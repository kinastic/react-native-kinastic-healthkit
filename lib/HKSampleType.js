import { HKQuantityTypes } from './HKQuantityType';
import { HKCategoryTypes } from './HKCategoryType';
import { HKCorrelationTypes } from './HKCorrelationType';
import { HKDocumentTypes } from './HKDocumentType';
import { HKSeriesTypes } from './HKSeriesType';
export var HKObjectSampleType;
(function (HKObjectSampleType) {
    HKObjectSampleType["workout"] = "workout";
    HKObjectSampleType["CDA"] = "CDA";
    HKObjectSampleType["audiogram"] = "audiogram";
})(HKObjectSampleType || (HKObjectSampleType = {}));
export const HKSampleTypes = [
    ...HKQuantityTypes,
    ...HKCategoryTypes,
    ...HKCorrelationTypes,
    ...HKDocumentTypes,
    ...HKSeriesTypes,
    ...Object.keys(HKObjectSampleType),
];
export const HKObjectSampleTypes = Object.keys(HKObjectSampleType);
//# sourceMappingURL=HKSampleType.js.map