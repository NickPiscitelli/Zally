import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, Image, ScrollView } from 'react-native';
import ZText from './Components/ZText.js';
import Coin from './Components/Coin.js';
import SideNav from './Components/Sidenav.js';
import Config from 'react-native-config';
import Collapsible from 'react-native-collapsible';

import {
  DrawerNavigator, DrawerItems, SafeAreaView
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

class PortfolioScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'My Portfolio',
    drawerIcon: ({ tintColor }) => (
      <Image
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={[styles.row, styles.total]}>
            <ZText style={{fontSize: 25, fontWeight: 'bold'}}>Total: $10</ZText>
            <ZText>Zally!</ZText>
            <Button
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
              title="OPen Drawer"
            />
            <Button
              onPress={() => this.props.navigation.navigate('Settings')}
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
  }
}


class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: ({ tintColor }) => (
      <Image
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const RootNavigator = DrawerNavigator({
  Portfolio: {
    screen: PortfolioScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
},{
  contentComponent: SideNav,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
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