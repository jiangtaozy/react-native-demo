/*
 * Created by jemo on 2018-3-23.
 * 导航
 */

import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Home from '../components/home';
import Sort from '../components/sort';
import Area from '../components/area';
import User from '../components/user';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../components/cart';
import Nearby from '../components/nearby';

export default TabNavigator(
  {
    创购商城: { screen: Home },
    //分类: { screen: Sort },
    //地区: { screen: Area },
    附近: { screen: Nearby },
    支付: { screen: Area },
    购物车: { screen: Cart },
    我的: { screen: User },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === '创购商城') {
          iconName = `home${focused ? '' : '-outline'}`;
        //} else if (routeName === '分类') {
        //  iconName = 'format-list-bulleted';
        } else if (routeName === '附近') {
          iconName = 'map-marker-radius';
        } else if (routeName === '支付') {
          iconName = 'credit-card';
        } else if (routeName === '购物车') {
          iconName = `cart${focused ? '' : '-outline'}`;
        } else if (routeName === '我的') {
          iconName = `account${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={30} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 12,
        marginTop: -4,
        marginBottom: 4,
      },
      style: {
        backgroundColor: 'white',
        height: 55,
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    //initialRouteName: '购物车',
  }
);
