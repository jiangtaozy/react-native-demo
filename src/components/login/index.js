/*
 * Created by jemo on 2018-3-27.
 * 用户登录
 */

import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import TouchableItem from '../TouchableItem';

class Login extends Component {
  render() {
    return(
      <View
        style={styles.container}>
        <Text
          style={styles.title}>
          用户登录
        </Text>
        <View
          style={styles.inputContainer}>
          <TextInput
            underlineColorAndroid='transparent'
            placeholderTextColor='#a1a1a1'
            placeholder={'用户名/邮箱/手机号'}
            style={styles.input}>
          </TextInput>
          </View>
        <View
          style={styles.inputContainer}>
          <TextInput
            underlineColorAndroid='transparent'
            placeholderTextColor='#a1a1a1'
            placeholder={'密码'}
            secureTextEntry
            style={styles.input}>
          </TextInput>
        </View>
        <TouchableItem
          style={styles.button} >
          <Text
            style={styles.buttonTitle}>
            登录
          </Text>
        </TouchableItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 25,
    marginBottom: 25,
  },
  inputContainer: {
    width: '80%',
    height: 60,
    borderBottomColor: '#b5b5b5',
    borderBottomWidth: 0.3,
  },
  input: {
    flex: 1,
  },
  button: {
    width: '80%',
    height: 40,
    marginTop: 40,
    backgroundColor: '#00cd66',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonTitle: {
    color: 'white',
  }
});

export default Login;
