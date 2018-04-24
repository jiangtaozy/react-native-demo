/*
 * Created by Saul on 2018-3-24.
 * 用户个人中心
 */

import React from 'react';
import { View, Text } from 'react-native';
import Profile from './Profile';
import Order from './Order';
import UserCenter from './UserCenter';

// 用户模块包含用户简介、用户订单和用户服务中心等
class User extends React.Component {
  render() {
    return(
      <View style={{ flex: 1, backgroundColor: '#F5F6F7'  }}>
        <Profile />
        <Order />
        <UserCenter />
      </View>
    );
  }
}

export default User;
