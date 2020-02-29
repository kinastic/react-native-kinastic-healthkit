import HKCharacteristicTypes from 'react-native-kinastic-healthkit/HKCharacteristicType';
import HKQuantityTypes from 'react-native-kinastic-healthkit/HKQuantityType';
import HKCategoryTypes from 'react-native-kinastic-healthkit/HKCategoryType';
import HKCorrelationTypes from 'react-native-kinastic-healthkit/HKCorrelationType';
import HKSampleTypes from 'react-native-kinastic-healthkit/HKSampleType';


const HKObjectTypes = [
  ...HKQuantityTypes,
  ...HKCategoryTypes,
  ...HKCorrelationTypes,
  ...HKCharacteristicTypes,
  ...HKSampleTypes,
];

export default HKObjectTypes;
