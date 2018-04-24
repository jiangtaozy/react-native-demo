/*
 * Created by jemo on 2018-3-27.
 * 根目录导航
 */

import React from 'react';
import { StackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';
import Sort from '../components/sort';
import { StyleSheet, View } from 'react-native';
import Login from '../components/login';
import LoginHeaderRight from '../components/login/LoginHeaderRight';
import Register from '../components/login/Register';

export default StackNavigator(
  {
    Tab: {
      screen: TabNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    Sort: {
      screen: Sort,
      navigationOptions: ({ navigation }) => ({
        headerTitle: '分类',
        headerRight: (<View />)
      }),
    },
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#EFEFF4',
          elevation: 0,       //remove shadow on Android
          shadowOpacity: 0,   //remove shadow on iOS
        },
        headerRight: <LoginHeaderRight navigation={ navigation } />,
      }),
    },
    Register: {
      screen: Register,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#EFEFF4',
          elevation: 0,       //remove shadow on Android
          shadowOpacity: 0,   //remove shadow on iOS
        },
      }),
    },
  },
  {
    initialRouteName: 'Tab',
    //initialRouteName: 'Login',
    navigationOptions: {
      headerTitleStyle: {
        flex: 1,
        color: '#4F4F4F',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'normal',
      },
      headerStyle: {
        //backgroundColor: 'gray',
      },
    },
  },
);
