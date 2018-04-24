/*
 * Created by jemo on 2018-3-24.
 * 顶部搜索栏
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SearchBar from './SearchBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class HeadBar extends Component {
  render() {
    return(
      <View
        style={styles.container}>
        <View
          style={styles.city}>
          <Text
            style={styles.cityName}>
            杭州市
          </Text>
          <Icon
            name='chevron-down'
            size={25}
            color='white'
            style={styles.arrow} />
        </View>
        <SearchBar />
        <Image
          style={styles.internationalize}
          source={require('../../image/icon/internationalize.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    //backgroundColor: 'white',
    // 顶部高度
    marginTop: 25,
    zIndex: 1,
  },
  city: {
    flexDirection: 'row',
  },
  cityName: {
    fontSize: 16,
    //color: '#4F4F4F',
    color: 'white',
    paddingLeft: 10,
    lineHeight: 26,
  },
  arrow: {
    paddingRight: 5,
  },
  internationalize: {
    width: 25,
    height: 25,
    marginLeft: 10,
    marginRight: 10,
  }
});

export default HeadBar;
