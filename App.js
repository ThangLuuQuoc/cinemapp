import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Splash from './screens/Splash';
import SplashScreen from 'react-native-splash-screen';
import MainContainer from './screens/Splash';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { splash: true };
  }


  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'gray' }}>
        {this.openCloseSplash()}
      </View>
    );
  }

  openCloseSplash() {
    if (this.state.splash) {
      return (<Splash />);
    } else {
      return (<MainContainer />);
    }
  }

  componentDidMount() {
    SplashScreen.hide();
  }
}