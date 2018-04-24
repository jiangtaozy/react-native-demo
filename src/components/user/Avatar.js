/*
 * Created by Saul on 2018-3-24.
 * 头像
 */

import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import UserAvatar from 'react-native-user-avatar';

const userAvatarData = {
  username: 'xiaoshitou',
  url: 'http://secure.gravatar.com/avatar/e96aa7009a37543ce5e459c7891ba2b5?s=256&d=identicon&r=g',
}


// 用户头像
export default class Avatar extends React.Component {
  render() {
    return(
      <View style={ styles.avatar }>
        <UserAvatar
          size="60"
          name={ userAvatarData.username }
          src={ userAvatarData.url }
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  avatar: {
    position: 'absolute',
    right: 20,
    top: 50
  },
});
