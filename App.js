import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import ZText from './Components/ZText.js';
import Coin from './Components/Coin.js';
import Settings from './Library/Settings.js';
import Config from 'react-native-config';
import { Root, Tabs } from './config/router';

import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: PortfolioScreen },
  Settings: { screen: SettingsScreen },
});

export default class App extends React.Component {
  render() {
    return <Root />;
  }
}