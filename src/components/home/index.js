/*
 * Created by jemo on 2018-3-20.
 * Updated by Saul on 2018-4-02
 * 首页
 */

import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import HeadBar from './HeadBar';
import Banner from './Banner';
import ImageNavigator from './ImageNavigator';
import BannerAds from './BannerAds';
import News from './News';
import HotCategory from './HotCategory';

/**
 * 模块划分顺序
 * HeadBar
 * Banner
 * ImageNavigator
 * BannerAds
 * News
 * HotCategory
 * MallRecommend
 */
class Home extends React.Component {
  render() {
    return(
      <View>
        <HeadBar />
				<Banner />
        <ImageNavigator />
        <BannerAds />
        <News />
        <HotCategory />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
  },
  titleBar: {
    marginTop: 3,
  },
});

export default Home;
