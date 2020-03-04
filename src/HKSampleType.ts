import { HKQuantityType, HKQuantityTypes } from './HKQuantityType';
import { HKCategoryType, HKCategoryTypes } from './HKCategoryType';
import { HKCorrelationType, HKCorrelationTypes } from './HKCorrelationType';
import { HKDocumentType, HKDocumentTypes } from './HKDocumentType';
import { HKSeriesType, HKSeriesTypes } from './HKSeriesType';

export enum HKObjectSampleType {
  workout = 'workout',
  CDA = 'CDA',
  audiogram = 'audiogram',
}

export type HKSampleType =
  | HKQuantityType
  | HKCategoryType
  | HKCorrelationType
  | HKDocumentType
  | HKObjectSampleType
  | HKSeriesType;

export const HKSampleTypes: string[] = [
  ...HKQuantityTypes,
  ...HKCategoryTypes,
  ...HKCorrelationTypes,
  ...HKDocumentTypes,
  ...HKSeriesTypes,
  ...Object.keys(HKObjectSampleType),
];

export const HKObjectSampleTypes: string[] = Object.keys(HKObjectSampleType);
