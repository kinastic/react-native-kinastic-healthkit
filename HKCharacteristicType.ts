export enum HKCharacteristicType {
  dateOfBirth = 'dateOfBirth',
  biologicalSex = 'biologicalSex',
  bloodType = 'bloodType',
  fitzpatrickSkinType = 'fitzpatrickSkinType',
  wheelchairUse = 'wheelchairUse',
}

export const HKCharacteristicTypes: string[] = Object.keys(HKCharacteristicType);
