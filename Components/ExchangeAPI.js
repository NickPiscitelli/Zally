class ExchangeAPI {

  constructor(props){
    fetch('https://rest.coinapi.io/v1/exchanges?apikey=27B3804E-2170-4445-8190-AE57F2CD74B0')
    .then((response) => response.json())
    .then((responseData) =>
    {
      //set your data here
       console.warn(responseData.map((ex) => {
         ex.exchange_id
       }));
    })
  }
  fetchCoin(symbol) {
    if (symbol === 'BTC'){
      fetch('https://rest.coinapi.io/v1/exchangerate/'+symbol+'?apikey=27B3804E-2170-4445-8190-AE57F2CD74B0')
      .then((response) => response.json())
      .then((responseData) =>
      {
        //set your data here
        if (responseData.asset_id_base === 'ETH'){
          console.warn(responseData);
        }

      })
      .catch((error) => {
          console.error(error);
      });
    }
  }
}

export default ExchangeAPI;
