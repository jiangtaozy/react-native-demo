/*
 * Created by Saul on 2018-3-24.
 * 用户个人中心
 */

import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Avatar from './Avatar';

const userProfileData = {
  'username': 'Saul',
  'systemId': 132445,
  'tutorId': 134325,
  'belongsTo': 'gds234234'
}

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      userProfileData
    }
  }
  render() {
    const { userProfileData } = this.state;
    return(
      <View style={ styles.container }>
        <ImageBackground
          source={require('../../image/profile_bg.png') }
          style={ styles.bg }>
          <Avatar />
          <View style={ styles.userInfor }>
            <Text style={ styles.userTitle }>{ userProfileData.username }</Text>
            <Text style={ styles.userInforText }>系统编号:    { userProfileData.systemId }</Text>
            <Text style={ styles.userInforText }>辅  导  员:    { userProfileData.tutorId }</Text>
            <Text style={ styles.userInforText }>所属服务中心:    { userProfileData.belongsTo }</Text>
          </View>
        </ImageBackground>
        <View style={ styles.collection }>
          <View style={ styles.collectionItem }>
            <Text style={ styles.collectionItemNum }>1</Text>
            <Text style={ styles.collectionItemText }>收藏商品</Text>
          </View>
          <View style={ styles.collectionItem }>
            <Text style={ styles.collectionItemNum }>1</Text>
            <Text style={ styles.collectionItemText }>关注店铺</Text>
          </View>
          <View style={ styles.collectionItem }>
            <Text style={ styles.collectionItemNum }>16</Text>
            <Text style={ styles.collectionItemText }>我的足迹</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#ff904f',
  },
  bg: {
    paddingBottom: 30
  },
  userInfor: {
    marginTop: 50,
    marginLeft: 20
  },
  userTitle: {
    marginBottom: 20,
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },
  userInforText: {
    marginBottom: 5,
    color: '#FFF',
  },
  collection: {
    flexDirection: 'row',
    backgroundColor: '#FFF'
  },
  collectionItem: {
    flex: 1,
    padding: 10,
  },
  collectionItemNum: {
    textAlign: 'center',
    fontSize: 22,
    color: '#666',
    marginTop: 10,
    marginBottom: 6
  },
  collectionItemText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 9
  },
});
