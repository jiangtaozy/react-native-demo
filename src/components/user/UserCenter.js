/*
 * Created by Saul on 2018-3-24.
 * 用户中心： 店铺，服务等
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Image from 'react-native-remote-svg';


// 用户中心列表
const UserCenterListItem = ({ title, imageSrc, ...rest }) => {
  return (
    <View style={ styles.listItem }>
      <Image
        source={ imageSrc }
        style={ styles.itemIcon }
      />
      <Text style={ styles.itemText }>{ title }</Text>
    </View>
  );
}


export default class UserCenter extends React.Component {
  render() {
    return(
      <View style={ styles.container }>
        <UserCenterListItem
          title={ '我的店铺' }
          imageSrc={ require('../../image/svg/comment.svg') }
        />
        <UserCenterListItem
          title={ '我的服务中心' }
          imageSrc={ require('../../image/svg/comment.svg') }
        />
        <UserCenterListItem
          title={ '我的店铺' }
          imageSrc={ require('../../image/svg/comment.svg') }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  listItem: {
    alignItems: 'center',           // 交叉轴对齐关系
    marginTop: 1,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  itemIcon: {
    // justifyContent: 'center',
    width: 30,
    height: 30,
  },
  itemText: {
    padding: 10,
    color: '#666',
    fontSize: 15
  }
});
