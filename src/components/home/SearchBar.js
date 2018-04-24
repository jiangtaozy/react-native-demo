/*
 * Created by jemo on 2018-3-23.
 * 搜索栏
 */

import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class SearchBar extends Component {
  render() {
    return(
      <View
        style={styles.container}>
        <Icon
          name='magnify'
          size={20}
          color='gray'
          style={styles.icon} />
        <TextInput
          style={styles.input}
          underlineColorAndroid='transparent'
          placeholderTextColor='gray'
          placeholder={'搜索商品或店铺'}>
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 30,
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    alignItems: 'center',
  },
  icon: {
    paddingLeft: 8,
    paddingRight: 5,
  },
  input: {
    flex: 1,
    height: 30,
    // Android adds some default padding on top and bottom,
    // you can reset them by adding paddingVertical: 0 to your element' style.
    paddingVertical: 0,
  }
});

export default SearchBar;
