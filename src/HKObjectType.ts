import { HKCharacteristicType, HKCharacteristicTypes } from './HKCharacteristicType';
import { HKSampleType, HKSampleTypes } from './HKSampleType';

export type HKObjectType = HKSampleType | HKCharacteristicType;

const HKObjectTypes: string[] = [...HKCharacteristicTypes, ...HKSampleTypes];

export default HKObjectTypes;
