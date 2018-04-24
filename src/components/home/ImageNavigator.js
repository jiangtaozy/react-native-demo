/*
 * Created by jemo on 2018-3-26.
 * 图片导航
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageNavBar from './ImageNavBar';

class ImageNavigator extends Component {
  render() {
    let navData = [
      [
        {
          imageSource: require('../../image/icon/home-mall.png'),
          title: '自创商城',
        },
        {
          imageSource: require('../../image/icon/home-produce.png'),
          title: '生产制造',
        },
        {
          imageSource: require('../../image/icon/home-travel.png'),
          title: '旅游服务',
        },
        {
          imageSource: require('../../image/icon/home-transport.png'),
          title: '物流配送',
        },
      ],
      [
        {
          imageSource: require('../../image/icon/home-job.png'),
          title: '快创快富',
        },
        {
          imageSource: require('../../image/icon/home-market.png'),
          title: '市场商城',
        },
        {
          imageSource: require('../../image/icon/home-vip.png'),
          title: '致富专区',
        },
        {
          imageSource: require('../../image/icon/home-join.png'),
          title: '代理机构',
        },
      ],
    ];
    let navComponent = navData.map((listData, index) => {
      return(
        <List
          listData={listData}
          key={index}
        />
      );
    });
    return(
      <View
        style={styles.container}>
        {navComponent}
      </View>
    );
  }
}

class List extends Component {
  render() {
    let { listData } = this.props;
    let listComponent = listData.map((item, index) => {
      return(
        <ImageNavBar
          data={item}
          key={index}
        />
      );
    });
    return(
      <View
        style={styles.list}>
        {listComponent}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 8,
  },
  list: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default ImageNavigator;
