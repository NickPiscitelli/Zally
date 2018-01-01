import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import ZText from './Components/ZText.js';
import Coin from './Components/Coin.js';
import Settings from './Library/Settings.js';
import Config from 'react-native-config';

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

export default class App extends React.Component {
  render() {
    return (
      <Settings />
      <View style={styles.container}>
        <View style={[styles.row, styles.total]}>
          <ZText style={{fontSize: 25, fontWeight: 'bold'}}>Total: $10</ZText>
          <ZText>Zally!</ZText>
        </View>
        <FlatList
          style={{flex: 1, alignSelf: 'stretch'}}
          data={coins}
          renderItem={({item}) => <Coin style={{alignSelf: 'stretch' }} symbol={item.key} />}
        />
      </View>
    );
  }
}

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
