/*
 * Created ba jemo on 2018-3-24.
 * 标题栏
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class TitleBar extends Component {
  render() {
    let { title } = this.props;
    return(
      <View
        style={styles.container}>
        <View
          style={styles.titleContainer}>
          <View
            style={styles.bar}
          />
          <Text
            style={styles.title}>
            {title}
          </Text>
        </View>
        <Icon
          name='chevron-right'
          size={25}
          color='gray'
          style={styles.arrow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar: {
    marginLeft: 10,
    width: 3,
    height: 15,
    backgroundColor: 'red',
  },
  title: {
    color: 'red',
    fontSize: 16,
    paddingLeft: 5,
  },
  arrow: {
    paddingRight: 5,
  },
});

export default TitleBar;
