/*
 * Created by Saul on 2018-4-04.
 * 最新消息
 */

import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Slick from 'react-native-slick';


import data from './_initData';
const { news } = data;
// 过长的商店名字可能会超过手机横屏的总长度，导致断行。所以商店名字的展示在后期应该给出明确的限定长度
const shopNames = news.map(item => item.shopName);

class News extends React.Component {
  render() {
    return(
      <View style={ styles.container }>
        <Text style={ styles.latest }>最新</Text>
        <Text style={ styles.subtitle }>热烈庆祝</Text>
        <Slick
          showsPagination={false}
          horizontal={ false }
          autoplay={ true }
          height={ 20 }
          width={ 130 }
          style={ styles.slickWrapper }
          showsButtons={ false }>
          {
            shopNames.map((name, i) => (
              <View
                key={i}
                style={ styles.slide }>
                <Text style={ styles.title }>{ name }</Text>
              </View>
            ))
          }
        </Slick>
        <Text style={ styles.subtitle }>入驻创购国际</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10

  },
  slickWrapper: {
    // alignSelf: 'center'
    marginTop: 1,
    marginLeft: 10,
  },
  slide: {

  },
  latest: {
    padding: 4,
    paddingLeft: 6,
    paddingRight: 6,
    marginLeft: 10,
    color: '#A8ACB7',
    fontSize: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#A8ACB7',
  },
  subtitle: {
    color: '#F76118',
    fontSize: 13,
    marginLeft: 10
  },
  title: {
    color: '#666',
    fontSize: 16,
  },
})

export default News;
