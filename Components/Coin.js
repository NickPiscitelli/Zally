import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ZText from './ZText.js';
import ExchangeAPI from './ExchangeAPI.js';
import CoinAPI from '../api/Coins.js';
import Portfolio from './Portfolio.js';
import { FormattedCurrency, FormattedDate, FormattedWrapper } from 'react-native-globalize';

class Coin extends Component {
  
  constructor(props){
      super(props);
      this.state = {
          coin: {},
          item: {}
      };

      var c = new CoinAPI();
      var coin = c.fetchCoin(props.symbol)
                        .then((coin) => {
                            console.log(coin)
                            console.log('coin')
                            this.setState({
                                coin: coin
                            })
                        });
      
        var item = c.fetchCoin(props.symbol)
            .then((item) => {
                this.setState({
                    item: item
                })
            });
      //console.error(this.props.symbol)
      //var API = new ExchangeAPI();
      //var coin = API.fetchCoin(this.props.symbol);
  }

  render() {
      return <FormattedWrapper locale="en" currency="USD" messages={{}}>
      <View style={coinStyles.coinRow}>
            <View style={[coinStyles.stack, coinStyles.coinImage]}>
                <ZText style={{textAlign: 'center'}}>
                    <Image style={{width: 50, height: 50 }} source={require('../assets/BTC.png')} />
                </ZText>
                <ZText style={{textAlign: 'center'}}>{this.props.symbol}</ZText>
            </View>
            <View style={[coinStyles.stack, coinStyles.holdings]}>
                <FormattedCurrency value={4.01} currency="USD" />
                <ZText style={{textAlign: 'center'}}>{this.state.item.holdings}</ZText>
            </View>
            <View style={[coinStyles.stack, coinStyles.price]}>
                <FormattedCurrency value={this.state.coin.rate} currency="USD"/>
                <ZText style={{textAlign: 'center', color: 'green'}}>+3.33%</ZText>
            </View>
        </View>
        </FormattedWrapper>
  }

  //_onPress=()=>{
    //requestAnimationFrame(()=>{
    //    this.props.navigator.pop();
   // })
  //}
}

const coinStyles = StyleSheet.create({
    coinRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderWidth: 0.5,
      borderColor: '#f5f5f5',
      padding: 5
    },
    stack: {
      flexDirection: 'column',
      marginTop: 5,
      marginBottom: 5,
      alignSelf: 'stretch',
      padding: 10
    },
    holdings: {
      flex: 3,
      
    }
  });

export default Coin;
