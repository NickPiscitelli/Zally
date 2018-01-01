import React from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import ZText from './Components/ZText.js';
import Coin from './Components/Coin.js';
import Config from 'react-native-config';

import {
  StackNavigator,
} from 'react-navigation';

var coins = [
  {key: 'BTC'},
  {key: 'ETH'},
  {key: 'LTC'},
  {key: 'BCH'},
  {key: 'ARK'},
  {key: 'OMG'},
  {key: 'REQ'},
  {key: 'XRB'},
  {key: 'XRP'},
  {key: 'NEM'},
  {key: 'NEO'},
  {key: 'QRL'},
  {key: 'NXT'},
  {key: 'GNT'},
  {key: 'ANT'},
  {key: 'XLM'}
];

const PortfolioScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.container}>
      <View style={[styles.row, styles.total]}>
        <ZText style={{fontSize: 25, fontWeight: 'bold'}}>Total: $10</ZText>
        <ZText>Zally!</ZText>
        <Button
          onPress={() => navigation.navigate('Settings')}
          title="Go to settings"
        />
      </View>
      <FlatList
        style={{flex: 1, alignSelf: 'stretch'}}
        data={coins}
        renderItem={({item}) => <Coin style={{alignSelf: 'stretch' }} symbol={item.key} />}
      />
    </View>
  </View>
);

const SettingsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: PortfolioScreen,
    navigationOptions: {
      headerTitle: 'My Portfolio',
    },
  },
  Details: {
    screen: SettingsScreen,
    navigationOptions: {
      headerTitle: 'Settings',
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginTop: 15, //Status bar height
    padding: 0
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  total: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    height: 75,
    padding: 15
  },
  stack: {
    flexDirection: 'column'
  },
  holdings: {
    flex: 2
  },
  coinImage:{
    flex: 1
  }
});

export default RootNavigator;

//export default class App extends React.Component {
//  render() {
//    return <Root />;
//  }
//}