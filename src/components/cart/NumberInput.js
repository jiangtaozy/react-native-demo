/*
 * Created by jemo on 2018-3-29.
 * 输入数字
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableItem from '../TouchableItem';

class NumberInput extends Component {
  constructor(props) {
    super(props);
    let { value } = props;
    this.state = {
      value: parseInt(value),
    };
    this.onMinusClick = this.onMinusClick.bind(this);
    this.onPlusClick = this.onPlusClick.bind(this);
  }

  onMinusClick() {
    let { value } = this.state;
    if(value > 0) {
      this.setState({
        value: value - 1,
      });
    }
  }

  onPlusClick() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  render() {
    let { value } = this.state;
    //console.log('value: ', value);
    return(
      <View
        style={styles.container}>
        <TouchableItem
          style={styles.icon}
          onPress={this.onMinusClick}>
          <Icon
            name='minus'
            size={20}
            color='gray'
          />
        </TouchableItem>
        <Text
          style={styles.number}>
          {value}
        </Text>
        <TouchableItem
          style={styles.icon}
          onPress={this.onPlusClick}>
          <Icon
            name='plus'
            size={20}
            color='gray'
          />
        </TouchableItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#e5e5e5',
    borderRadius: 3,
    width: 90,
  },
  number: {
    flex: 1,
    borderLeftWidth: 0.5,
    borderLeftColor: '#e5e5e5',
    borderRightWidth: 0.5,
    borderRightColor: '#e5e5e5',
    textAlign: 'center',
  },
  icon: {
    flex: 1,
    alignItems: 'center',
  },
});

export default NumberInput;
