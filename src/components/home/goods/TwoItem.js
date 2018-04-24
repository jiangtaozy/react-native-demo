/*
 * Created by jemo on 2018-3-21.
 * 双产品单元
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GoodsItem from './GoodsItem';

class TwoItem extends Component {
  render() {
    let { itemData } = this.props;
    //console.log('itemData: ', itemData);
    let twoItem = itemData.map((item, index) => {
      return(
        <GoodsItem
          key={index}
          itemData={item}
        />
      );
    });
    return(
      <View
        style={styles.container}>
        {twoItem}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TwoItem;
