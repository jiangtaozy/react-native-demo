/*
 * Created by jemo on 2018-3-21.
 * 轮播图
 */

import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import ImageSlider from 'react-native-image-slider';

// 初始化数据
import data from './_initData';
const { banner } = data;
const imageSrcList = banner.map(item => item.imageSrc);

class Banner extends Component {
  render() {
    return (
      <View
        style={styles.sliderContainer}>
        <ImageSlider
          images={ imageSrcList }
          autoPlayWithInterval={2000}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderContainer: {
    marginTop: -40,         // banner 位置上提
    height: 198,            // 198 px 是图片的真实高度
  },
  customSlide: {
  },
  customImage: {
    height: 198,            // 198 px 是图片的真实高度
  }
});

export default Banner;
