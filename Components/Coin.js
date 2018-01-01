import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ZText from './ZText.js';
import ExchangeAPI from './ExchangeAPI.js';

class Coin extends Component {
  constructor(props){
      super(props);
      //console.error(this.props.symbol)
      var API = new ExchangeAPI();
      var coin = API.fetchCoin(this.props.symbol);
      
  }
  render() {
      return <View style={coinStyles.coinRow}>
            <View style={[coinStyles.stack, coinStyles.coinImage]}>
                <ZText style={{textAlign: 'center'}}>
                    <Image style={{width: 50, height: 50 }} source={require('../assets/BTC.png')} />
                </ZText>
                <ZText style={{textAlign: 'center'}}>{this.props.symbol}</ZText>
            </View>
            <View style={[coinStyles.stack, coinStyles.holdings]}>
                <ZText style={{textAlign: 'center'}}>$4,768</ZText>
                <ZText style={{textAlign: 'center'}}>100.33</ZText>
            </View>
            <View style={[coinStyles.stack, coinStyles.price]}>
                <ZText style={{textAlign: 'center'}}>$14.59</ZText>
                <ZText style={{textAlign: 'center', color: 'green'}}>+3.33%</ZText>
            </View>
        </View>
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
      borderColor: 'green',
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
