/*
 * Created by jemo on 2018-3-21.  * 产品列表
 */

import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import TwoItem from './TwoItem';

let listData = [
  [
    {
      image: 'https://gma.alicdn.com/bao/uploaded/i3/59186404/TB2dofbm9YH8KJjSspdXXcRgVXa_!!0-saturn_solar.jpg_200x200.jpg',
      title: '修身七分袖蕾丝仙女长裙白色公主收腰连衣裙',
      price: '259',
    },
    {
      image: 'https://img.alicdn.com/bao/uploaded/i2/23128385/TB2kM6.beuSBuNjy1XcXXcYjFXa_!!0-saturn_solar.jpg_200x200q90.jpg',
      title: '夏设计师品牌新款 中长款圆领短袖连衣裙',
      price: '719',
    },
  ],
  [
    {
      image: 'https://img.alicdn.com/bao/uploaded/i3/333314690/TB1.cw_n0rJ8KJjSspaXXXuKpXa_!!0-item_pic.jpg_200x200q90.jpg_.webp',
      title: '欧洲站新款女装岁贵妇女士妈妈装高档品牌礼服连衣裙春秋正品',
      price: '526',
    },
    {
      image: 'https://img.alicdn.com/bao/uploaded/i2/333314690/TB1T14sXdknBKNjSZKPXXX6OFXa_!!0-item_pic.jpg_200x200q90.jpg_.webp',
      title: '欧洲站162018春装新款女装两件套连衣裙正品',
      price: '388',
    },
  ],
];

class GoodsList extends Component {
  render() {
    //console.log('this.props: ', this.props);
    let { listHeader } = this.props;
    return(
      <FlatList
        data={listData}
        renderItem={(item) => {
          //console.log('item: ', item);
          return(
            <TwoItem
              itemData={item.item}
            />
          );
        }}
        style={styles.container}
        ListHeaderComponent={listHeader}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: -65,
  }
});

export default GoodsList;
