/*
 * Created by jemo on 2018-3-28.
 * 购物车
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItem from './CartItem';

class Cart extends Component {
  render() {
    return(
      <View
        style={styles.container}>
        <CartHeader />
        <SectionList
          style={styles.sectionList}
          sections = {[
            {
              data: data,
              renderItem: ({item}) => {
                //console.log('item: ', item);
                return (
                  <CartItem itemData={item} />
                );
              },
            }
          ]}
          keyExtractor={(item, index) => index}
        />
        <CartFooter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
  },
  sectionList: {
    //backgroundColor: 'red',
  },
});

const data = [
  {
    shopName: '增力旗舰店',
    items: [
      {
        imageUrl: 'https://gma.alicdn.com/bao/uploaded/i3/59186404/TB2dofbm9YH8KJjSspdXXcRgVXa_!!0-saturn_solar.jpg_200x200.jpg',
        name: '修身七分袖蕾丝仙女长裙白色公主收腰连衣裙',
        sku: '028蓝薄款',
        currentPrice: '259',
        originalPrice: '659',
        amount: '1',
      },
      {
        imageUrl: 'https://img.alicdn.com/bao/uploaded/i2/23128385/TB2kM6.beuSBuNjy1XcXXcYjFXa_!!0-saturn_solar.jpg_200x200q90.jpg',
        name: '夏设计师品牌新款 中长款圆领短袖连衣裙',
        sku: '029蓝薄款',
        currentPrice: '719',
        originalPrice: '999',
        amount: '1',
      },
    ],
  },
  {
    shopName: '波梵森',
    items: [
      {
        imageUrl: 'https://gma.alicdn.com/bao/uploaded/i3/59186404/TB2dofbm9YH8KJjSspdXXcRgVXa_!!0-saturn_solar.jpg_200x200.jpg',
        name: '修身七分袖蕾丝仙女长裙白色公主收腰连衣裙',
        sku: '028蓝薄款',
        currentPrice: '259',
        originalPrice: '659',
        amount: '3',
      },
      {
        imageUrl: 'https://img.alicdn.com/bao/uploaded/i2/23128385/TB2kM6.beuSBuNjy1XcXXcYjFXa_!!0-saturn_solar.jpg_200x200q90.jpg',
        name: '夏设计师品牌新款 中长款圆领短袖连衣裙',
        sku: '029蓝薄款',
        currentPrice: '719',
        originalPrice: '999',
        amount: '2',
      },
    ],
  },
];

export default Cart;
