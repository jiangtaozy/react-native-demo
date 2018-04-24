/*
 * Created by Saul on 2018-3-24.
 * 订单
 */

import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Image from 'react-native-remote-svg';

// 订单头部
const OrderHeader = () => (
  <View style={ styles.header }>
    <Text style={ styles.headerTitle }>我的订单</Text>
    <Text style={ styles.readMore }>查看全部</Text>
    <Image
      source={require('../../image/svg/more.svg')}
      style={ styles.readMoreIcon }
    />
  </View>
);

// 订单状态子项
const OrderStatusItem = ({ title, imageSrc, ...rest }) => (
  <View style={ styles.statusItem }>
    <Image
      source={ imageSrc }
      style={ styles.statusItemIcon }
    />
    <Text style={ styles.statusItemText }>{ title }</Text>
  </View>
);

// 订单状态
const OrderStatus = () => (
  <View style={ styles.status }>
    <OrderStatusItem
      title={ '待付款' }
      imageSrc={ require('../../image/svg/wallet.svg') }
    />
    <OrderStatusItem
      title={ '待发货' }
      imageSrc={ require('../../image/svg/delivery.svg') }
    />
    <OrderStatusItem
      title={ '待收货' }
      imageSrc={ require('../../image/svg/receive.svg') }
    />
    <OrderStatusItem
      title={ '待评价' }
      imageSrc={ require('../../image/svg/comment.svg') }
    />
    <OrderStatusItem
      title={ '售后服务' }
      imageSrc={ require('../../image/svg/service.svg') }
    />
  </View>
);

// 订单
export default class Order extends React.Component {
  render() {
    return(
      <View style={ styles.container }>
        <OrderHeader />
        <OrderStatus />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  headerTitle: {
    padding: 5,                 // 最高项决定了整体栏目的高度
    justifyContent: 'center',
    fontSize: 16,
    color: '#666'
  },
  readMore: {
    marginLeft: 'auto',
    marginRight: 10,
    justifyContent: 'center',
    fontSize: 13,
    color: '#999'
  },
  readMoreIcon: {
    height: 20,
    width: 20,
  },
  status: {
    backgroundColor: '#F5F6F7',
    // marginTop: 33,              // 应该通过背景色空出一条分割线
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusItem: {
    margin: 1,
    paddingTop: 20,
    paddingBottom: 20,
    width: '19.5%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusItemIcon: {
    height: 20,
    width: 20,
  },
  statusItemText: {
    paddingTop: 10,
    justifyContent: 'center',
    fontSize: 13,
    color: '#999'
  },
});
