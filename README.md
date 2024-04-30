# react-native-kinastic-healthkit

A React Native wrapper for Apple's HealthKit, designed to facilitate the integration of HealthKit into your React Native applications.

## Installation

```bash
npm install react-native-kinastic-healthkit --save
```
or with `yarn`

```bash
yarn add react-native-kinastic-healthkit --save
```

## Overview

This module provides interfaces for several HealthKit functionalities:
- **CLLocation**: Manages location data.
- **HKAnchoredObjectQuery**: Executes queries that retrieve new data since the last executed query.
- **HKCategorySample, HKQuantitySample**: Handles the storage and retrieval of HealthKit category and quantity samples.
- **HKCorrelation, HKQuery**: Facilitates operations with correlated items and general data queries.
- **HKWorkout**: Supports the creation and manipulation of workout sessions.

## Example

### Saving a workout

```typescript
const samples = [
  HKQuantitySample.build(
    UUID(),
    HKQuantityType.activeEnergyBurned,
    startDate,
    endDate,
    totalEnergyBurned,
  ),
  HKQuantitySample.build(
    UUID(),
    HKQuantityType.distanceCycling,
    startDate,
    endDate,
    totalDistance,
  ),
];

const workout = HKWorkout.build(
  UUID(),
  HKWorkoutActivityType.cycling, // any HKWorkoutActivityType
  startDate,
  endDate,
  totalEnergyBurned,
  totalDistance,
);
workout.samples = samples;

await KinasticHealthKit.saveWorkout([workout]);
```

# Contributing
Contributions are welcome! Please check the repository's issues tab for known issues or feature requests.

For more details and specific API usage, visit the repository:
[kinastic/react-native-kinastic-healthkit](https://github.com/kinastic/react-native-kinastic-healthkit)
