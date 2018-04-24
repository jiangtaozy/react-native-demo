/*
 * Created by jemo on 2018-3-28.
 * 购物车中店铺单元
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CartItemBar from './CartItemBar';
import GoodsItem from './GoodsItem';

class CartItem extends Component {
  render() {
    let { items, shopName } = this.props.itemData;
    let goodsItems = items.map((item, index) => {
      return(
        <GoodsItem
          itemData={item}
          key={index}
        />
      );
    });
    return(
      <View
        style={styles.container}>
        <CartItemBar shopName={shopName} />
        {goodsItems}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
});

export default CartItem;
