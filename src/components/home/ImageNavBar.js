/*
 * Created by jemo on 2018-3-26.
 * 图片导航单元
 */

import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

class ImageNavBar extends Component {
  render() {
    let { data } = this.props;
    //console.log('data: ', data);
    return(
      <View
        style={styles.container}>
        <Image
          style={styles.image}
          source = {data.imageSource}
        />
        <Text
          style={styles.title}>
        {data.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  title: {
    paddingTop: 8,
    fontSize: 13,
    color: '#787878',
  }
});

export default ImageNavBar;
