/*
 * Created by jemo on 2018-3-28.
 * 用户注册
 */

import React, { Component } from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';
import TouchableItem from '../TouchableItem';

class Register extends Component {
  render() {
    return(
      <View
        style={styles.container}>
        <Text
          style={styles.title}>
          用户注册
        </Text>
        <View
          style={styles.inputContainer}>
          <TextInput
            underlineColorAndroid='transparent'
            placeholderTextColor='#a1a1a1'
            placeholder={'手机号码'}
            style={styles.input}>
          </TextInput>
          </View>
        <View
          style={styles.inputContainer}>
          <TextInput
            underlineColorAndroid='transparent'
            placeholderTextColor='#a1a1a1'
            placeholder={'验证码'}
            style={styles.input}>
          </TextInput>
          <TouchableItem
            borderless
            style={styles.getCodeContainer}>
            <Text
              style={styles.getCodeTitle}>
              获取验证码
            </Text>
          </TouchableItem>
        </View>
        <View
          style={styles.inputContainer}>
          <TextInput
            underlineColorAndroid='transparent'
            placeholderTextColor='#a1a1a1'
            placeholder={'密码 (6-16个字符，不含空格)'}
            secureTextEntry
            style={styles.input}>
          </TextInput>
        </View>
        <TouchableItem
          style={styles.button} >
          <Text
            style={styles.buttonTitle}>
            立即注册
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
  },
  getCodeContainer: {
    justifyContent: 'center',
  },
  getCodeTitle: {
    color: '#a1a1a1',
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

export default Register;
