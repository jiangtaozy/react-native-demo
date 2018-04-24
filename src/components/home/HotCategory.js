/*
 * Created by Saul on 2018-4-04.
 * 热门分类
 */

import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import TitleBar from './TitleBar';

import data from './_initData';
const { hotCategory } = data;


// 获取屏幕宽度
const deviceWidth = Dimensions.get('window').width;


class HotCategory extends React.Component {
  render() {
    return(
      <View>
        <TitleBar title={ '热门分类' }/>
        <View style={ styles.cardsContainer }>
          {
            hotCategory.map((item, i) =>(
              <View
                style={ styles.cardItem }
                key={i}>
                <Image
                  style={ styles.cardBg }
                  source={ item.imageSrc }
                />
                <Text style={ styles.cardText }>{ item.category }</Text>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cardItem: {
    flexBasis: deviceWidth * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    position: 'absolute',
    top: 20
  },
  cardBg: {
    width: deviceWidth * 0.25,
    height: 128,
  },
})

export default HotCategory;
