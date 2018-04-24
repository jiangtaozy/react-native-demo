/*
 * Created by jemo on 2018-3-20.
 * 店铺按地区分类
 */

import React from 'react';
import { View, Text, Button } from 'react-native';

class Area extends React.Component {
  render() {
    //console.log('this.props: ', this.props);
    return(
      <View
        style={{
          flex: 1,
          marginTop: 25,
          padding: 10,
        }}>
        <View
          style={{
            margin: 15,
          }}>
          <Button
            title="用户登录"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
        <View
          style={{
            margin: 15,
          }}>
          <Button
            title="分类"
            onPress={() => this.props.navigation.navigate('Sort')}
          />
        </View>
      </View>
    );
  }
}

export default Area;
