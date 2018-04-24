/*
 * Created by jemo on 2018-3-28.
 * 购物车标题栏
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TouchableItem from '../TouchableItem';

class CartHeader extends Component {
  render() {
    return(
      <View
        style={styles.container}>
        <View
          style={styles.titleContainer}>
          <Text
            style={styles.title}>
            购物车
          </Text>
        </View>
        <TouchableItem
          style={styles.rightBarContainer}
          borderless>
          <Text
            style={styles.rightBar}>
            管理
          </Text>
        </TouchableItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  titleContainer: {
    flex: 1,
    marginLeft: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  rightBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
  rightBar: {
    fontSize: 14,
  },
});

export default CartHeader;
