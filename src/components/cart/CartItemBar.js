/*
 * Created by jemo on 2018-3-28.
 * 购物车店铺标题栏
 */

import React, { Component } from 'react';
import { View, Text, CheckBox, StyleSheet } from 'react-native';
import TouchableItem from '../TouchableItem';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class CartItemBar extends Component {
  render() {
    let { shopName } = this.props
    return(
      <TouchableItem
        style={styles.touchableItem}>
        <View
          style={styles.container}>
          <View
            style={styles.leftContainer}>
            <CheckBox />
            <Text
              style={styles.title}>
              {shopName}
            </Text>
            <Icon
              name='chevron-right'
              size={25}
              color='gray'
              style={styles.arrow}
            />
          </View>
          <TouchableItem
            borderless
            style={styles.rightContainer}>
            <Text
              style={styles.coupon}>
              领券
            </Text>
          </TouchableItem>
        </View>
      </TouchableItem>
    );
  }
}

const styles = StyleSheet.create({
  touchableItem: {
    height: 50,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  title: {
    fontSize: 12,
    paddingLeft: 5,
    paddingRight: 5,
  },
  rightContainer: {
    height: '100%',
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coupon: {
    fontSize: 12,
  },
});

export default CartItemBar;

