/*
 * Created by jemo on 2018-3-19.
 * App
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import RootNavigator from './src/containers/RootNavigator';
import { StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const store = configureStore();

export default class App extends React.Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <View
        style={styles.container}>
        {/*
        <Provider store={store}>
          <RootNavigator />
        </Provider>
        */}
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
