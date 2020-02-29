import {NativeModules} from 'react-native';
import HKCategoryTypes from './HKCategoryType';
import HKCharacteristicTypes from './HKCharacteristicType';
import HKCorrelationTypes from './HKCorrelationType';
import HKQuantityTypes from './HKQuantityType';
import HKSampleTypes from './HKSampleType';
import HKObjectTypes from './HKObjectType';

const {KinasticHealthkit} = NativeModules;

export {
  KinasticHealthkit,
  HKObjectTypes,
  HKCategoryTypes,
  HKCharacteristicTypes,
  HKCorrelationTypes,
  HKQuantityTypes,
  HKSampleTypes,
};
