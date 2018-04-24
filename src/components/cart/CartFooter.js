/*
 * Created by jemo on 2018-3-28.
 * 购物车底栏
 */

import React, { Component } from 'react';
import { View, Text, CheckBox, StyleSheet } from 'react-native';
import TouchableItem from '../TouchableItem';

class CartFooter extends Component {
  render() {
    return(
      <View
        style={styles.container}>
        <View
          style={styles.leftContainer}>
          <CheckBox />
          <Text
            style={styles.checkText}>
            全选
          </Text>
        </View>
        <View
          style={styles.rightContainer}>
          <Text
            style={styles.noFareText}>
            不含运费
          </Text>
          <Text
            style={styles.sumText}>
            合计 :
          </Text>
          <Text
            style={styles.priceText}>
            ￥537
          </Text>
          <TouchableItem
            borderless
            style={styles.calculateContainer}>
            <Text
              style={styles.calculateText}>
              结算
            </Text>
          </TouchableItem>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  leftContainer: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  checkText: {
    fontSize: 14,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  noFareText: {
    fontSize: 10,
    color: 'gray',
  },
  sumText: {
    fontSize: 14,
    paddingLeft: 5,
  },
  priceText: {
    color: 'red',
    paddingLeft: 5,
    paddingRight: 10,
    fontSize: 14,
  },
  calculateContainer: {
    backgroundColor: 'red',
    width: 80,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculateText: {
    fontSize: 16,
    color: 'white',
  },
});

export default CartFooter;
