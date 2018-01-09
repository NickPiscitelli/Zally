import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, Image, ScrollView } from 'react-native';
import ZText from './Components/ZText.js';
import Coin from './Components/Coin.js';
import SideNav from './Components/Sidenav.js';
import Config from 'react-native-config';
import Collapsible from 'react-native-collapsible';
import Expo, { SQLite } from 'expo';
import CoinAPI from './api/Coins.js';

import Portfolio from './Components/Portfolio.js';

const db = SQLite.openDatabase('portfolios.db');
console.log(db);
import {
  DrawerNavigator, DrawerItems, SafeAreaView
} from 'react-navigation';

var coins = [
  {
    key: "BTC",
    name: "Bitcoin"
  },
  {
    key: "ETH",
    name: "Ethereum"
  },
  {
    key: "LTC",
    name: "Litecoin"
  }
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

  constructor(props) {
    super(props);
    this.state = {
      portfolios: []
    };

    var p = new Portfolio({
      db: db
    });
    p.fetchPortfolios()
      .then(data => {
        console.log(data)
        console.log('portfolios')
        this.setState({
          portfolios: data
        })
      })
  }
  componentDidMount() {
      db.transaction(tx => {
        ['portfolio_items', 'coins'].forEach(tbl => {
          tx.executeSql('DROP TABLE '+tbl);
        });
        tx.executeSql(
          'create table if not exists portfolios (id integer primary key not null, name varchar(255), description varchar(255));'
        );
        tx.executeSql(
          'create table if not exists portfolio_items ( ' +
            'id integer primary key not null,'+
            'portfolio integer references portfolios(id),' +
            'coin integer references coins(id),' +
            'currentHoldings float,' +
            'watch tinyint default 0'
          + ');'
        );
        tx.executeSql(
          'create table if not exists item_transactions ( ' +
            'id integer primary key not null,'+
            'portfolio_item integer references portfolio_items(id),' +
            'exchange integer references exchanges(id),' +
            'currentHoldings float,' +
            'amount float,' +
            'price float,' +
            "ts integer(4) not null default (strftime('%s','now'))"
          + ');'
        );
        tx.executeSql(
          'create table if not exists exchanges (id integer primary key not null, name varchar(255));'
        );
        tx.executeSql(
          "create table if not exists status (name varchar(50) primary key not null, value varchar(255),ts integer(4) not null default (strftime('%s','now')));"
        );
        tx.executeSql(
          'create table if not exists coins ( ' +
            'id integer primary key not null,' +
            'symbol varchar(10) not null,'+
            'name varchar(255)' +
          ');'
        );
        tx.executeSql('INSERT OR IGNORE INTO portfolios VALUES (1, "My Portfolio", "Default Portfolio")');
        tx.executeSql('INSERT OR IGNORE INTO portfolio_items VALUES (1, 1, 1, 14.6, 0),  (1, 1, 2, 33, 0)');
        tx.executeSql('INSERT OR IGNORE INTO coins VALUES (1,"BTC","Bitcoin"),(2,"ETH","Ethereum");');
      },
      // error callback
      function (something) {
          console.log("txn error: " + something);
      },
      // success callback
      function (something) {
          console.log("ALL DATA LOADED!");
      });

      db.transaction(tx => {
        tx.executeSql("SELECT value FROM status WHERE name = 'coin_update'", [], (_, { rows }) =>
          console.log(JSON.stringify(rows))
        );
      });
  }

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
      <View style={{marginTop: 50}}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
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