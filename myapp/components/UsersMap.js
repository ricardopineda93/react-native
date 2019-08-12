import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function UsersMap(props) {
  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 200
  },
  map: {
    width: '100%',
    height: '100%'
  }
});
