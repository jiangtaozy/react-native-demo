/*
 * Created by jemo on 2018-3-21.
 * 产品单元
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

class GoodsItem extends Component {
  render() {
    //console.log('this.props: ', this.props);
    let { itemData } = this.props;
    return(
      <View
        style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: itemData.image }}
        />
        <Text
          style={styles.title}>
          {itemData.title}
        </Text>
        <Text
          style={styles.price}>
          {'￥' + itemData.price}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 3,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 160,
  },
  title: {
    padding: 5,
    fontSize: 12,
    color: '#4F4F4F',
  },
  price: {
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize: 14,
    color: 'orange',
  }
});

export default GoodsItem;
