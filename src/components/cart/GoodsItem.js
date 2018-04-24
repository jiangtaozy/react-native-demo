/*
 * Created by jemo on 2018-3-28.
 * 购物车中商品单元
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, CheckBox, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableItem from '../TouchableItem';
import NumberInput from './NumberInput';

class GoodsItem extends Component {
  render() {
    let { itemData } = this.props;
    //console.log('itemData: ', itemData);
    return(
      <View
        style={styles.container}>
        <View
          style={styles.leftContainer}>
            <CheckBox />
        </View>
        <View
          style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: itemData.imageUrl}}
          />
        </View>
        <View
          style={styles.rightContainer}>
          <View
            style={styles.rightTopContainer}>
            <Text
              style={styles.title}>
              {itemData.name}
            </Text>
            <TouchableItem
              style={styles.touchableItem}>
              <View
                style={styles.skuContainer}>
                <Text
                  style={styles.sku}>
                  {itemData.sku}
                </Text>
                <Icon
                  name='chevron-down'
                  size={20}
                  color='gray'
                />
              </View>
            </TouchableItem>
          </View>
          <View
            style={styles.priceContainer}>
            <Text
              style={styles.currentPrice}>
              {'￥' + itemData.currentPrice}
            </Text>
            <Text
              style={styles.originalPrice}>
              {'￥' + itemData.originalPrice}
            </Text>
            <NumberInput
              value={itemData.amount}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 1,
  },
  leftContainer: {
    justifyContent: 'center',
    paddingLeft: 5,
  },
  imageContainer: {
    padding: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 3,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  rightTopContainer: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 12,
  },
  touchableItem: {
    backgroundColor: '#f0f0f0',
    paddingLeft: 5,
    marginTop: 5,
  },
  skuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sku: {
    fontSize: 12,
    color: 'gray',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currentPrice: {
    fontSize: 14,
    color: 'orange',
    paddingRight: 5,
  },
  originalPrice: {
    fontSize: 14,
    color: 'gray',
    paddingRight: 5,
    textDecorationLine: 'line-through',
  },
});

export default GoodsItem;
