import { HKQuantityType } from './HKQuantityType';
import { HKCategoryType } from './HKCategoryType';
import { HKCorrelationType } from './HKCorrelationType';
import { HKDocumentType } from './HKDocumentType';
import { HKSeriesType } from './HKSeriesType';
export declare enum HKObjectSampleType {
    workout = "workout",
    CDA = "CDA",
    audiogram = "audiogram"
}
export declare type HKSampleType = HKQuantityType | HKCategoryType | HKCorrelationType | HKDocumentType | HKObjectSampleType | HKSeriesType;
export declare const HKSampleTypes: string[];
export declare const HKObjectSampleTypes: string[];
