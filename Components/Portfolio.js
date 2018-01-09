import Expo, { SQLite } from 'expo';

//require('./Coin.js');

class Portfolio {
    constructor(props){
        this.state = {
            db: props.db
        }
    }

    fetchItem(id) {
        return new Promise((resolve,reject) => {
            this.state.db.transaction(tx => {
                tx.executeSql("SELECT * FROM portfolio_items WHERE id = ?", [id], (_, { rows }) => {
                    return resolve(rows._array)
                });
              },
              error => {
                return reject(error)
              }
            );
        })
    }

    fetchPortfolios() {
        return new Promise((resolve,reject) => {
            this.state.db.transaction(tx => {
                tx.executeSql("SELECT * FROM portfolios p JOIN portfolio_items pi ON p.id = pi.portfolio", [], (_, { rows }) => {
                    return resolve(rows._array)
                });
              },
              error => {
                return reject(error)
              }
            );
        })       
    }

    fetchPortfolio(id) {
        return new Promise((resolve,reject) => {
            this.state.db.transaction(tx => {
                tx.executeSql("SELECT * FROM portfolios WHERE id = ?", [id], (_, { rows }) => {
                    return resolve(rows._array)
                });
              },
              error => {
                return reject(error)
              }
            );
        })
    }
}

export default Portfolio;