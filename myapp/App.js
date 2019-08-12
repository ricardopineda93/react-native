/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';

export default class App extends Component {
  getUserLocationHandler = () => {
    Geolocation.getCurrentPosition(position => {
      console.log(position),
        err => {
          console.log(err);
        };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
