/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView } from 'react-native';
import {
  KinasticHealthkit,
  HKObjectTypes,
  HKSampleTypes,
  HKQuantityTypes,
  HKCharacteristicTypes,
  HKCategoryTypes,
} from 'react-native-kinastic-healthkit';

export default class App extends Component<{}> {
  state = {
    status: 'starting',
    message: '--',
  };
  componentDidMount() {
    KinasticHealthkit.requestAuthorization(HKObjectTypes, HKObjectTypes).then(
      result => {
        console.log('result', result);
        this.read();
      },
    );
  }

  async read() {
    const result0 = await KinasticHealthkit.querySample({
      sampleType: 'workout',
      unit: 'm',
      limit: 1000,
      startDate: new Date(2016, 4, 27).toISOString(),
    }).then(results => {
      console.log(JSON.stringify(results, null, 4));
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>☆KinasticHealthkit example☆</Text>
        <Text style={styles.instructions}>STATUS: {this.state.status}</Text>
        <Text style={styles.welcome}>☆NATIVE CALLBACK MESSAGE☆</Text>
        <Text style={styles.instructions}>{this.state.message}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
