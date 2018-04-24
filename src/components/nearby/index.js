/*
 * Created by jemo on 2018-4-4.
 * 附近
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MapView } from 'react-native-amap3d';

class Nearby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 39.91095,
      longitude: 116.37296,
    };
  }

  render() {
    let { latitude, longitude } = this.state;
    return(
      <View
        style={styles.container}>
        <Text>
          ({latitude},{longitude})
        </Text>
        <MapView
          style={styles.map}
          coordinate={{
              latitude,
              longitude,
            }}
          locationEnabled
          locationInterval={60000}
          onLocation={({ nativeEvent }) => {
            console.log('nativeEvent: ', nativeEvent);
            console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`);
            this.setState({
              latitude: nativeEvent.latitude,
              longitude: nativeEvent.longitude,
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  map: {
    flex: 1,
  },
});

export default Nearby;
