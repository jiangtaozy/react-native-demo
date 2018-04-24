/*
 * Created by Saul on 2018-4-04.
 * 最新消息
 */

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import data from './_initData';
const { bannerAds: { imageUrl } } = data;

class BannerAds extends React.Component {
  render() {
    return(
      <View style={ styles.container }>
        <Image
          source={{ uri: imageUrl }}
          style={ styles.image }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  image: {
    height: 46          // 46px 是图片的真实高度
  }
})

export default BannerAds;
