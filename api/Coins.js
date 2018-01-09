import React, { Component } from 'react';
import * as Expo from 'expo'

class CoinAPI extends Component {
  
  fetchCoin(symbol) {
    return new Promise((resolve, reject) => {
        // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
        // In this example, we use setTimeout(...) to simulate async code. 
        // In reality, you will probably be using something like XHR or an HTML5 API.

        var endpoint = Expo.Constants.manifest.extra.endpoint,
            apiKey = Expo.Constants.manifest.extra.apiKey;
        
        console.log(endpoint+'/v1/exchangerate/'+symbol)

        fetch('https://rest.coinapi.io/v1/exchangerate/'+symbol+'/USD?apiKey='+apiKey,{
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'X-CoinAPI-Key': apiKey
                }
            })
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                return resolve(responseJson.error ? { rate: 45.67 } : responseJson);
            })
            .catch((error) => {
                console.log('error')
                console.log(error)
                return reject(error);
            });
    })

  }
  render() {
    return (<View></View>);
  }
}

export default CoinAPI;