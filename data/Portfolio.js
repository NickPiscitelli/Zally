'use strict';

import Realm from 'realm';

class Portfolio extends Realm.Object {}
Portfolio.schema = {
    name: 'Portfolio',
    primaryKey: 'id',
    properties: {
        id: {
            type: 'int',
            default: 0
        },
        items: 'PortfolioItem[]',
        name: 'string',
        description: 'string'
    },
};

class PortfolioItem extends Realm.Object {}
PortfolioItem.schema = {
    name: 'PortfolioItem',
    primaryKey: 'id',
    properties: {
        id: {
            type: 'int',
            default: 0
        },
        coin: 'Coin',
        watch: 'bool',
        currentHoldings: 'float',
        transactions: 'Transaction[]'
    },
};
portfolio: 'Portfolio',

class Transaction extends Realm.Object {}
Transaction.schema = {
    name: 'Transaction',
    primaryKey: 'id',
    properties: {
        id: {
            type: 'int',
            default: 0
        },
        coin: 'Coin',
        exchange: 'Exchange',
        amount: 'float',
        price: 'float',
        date: 'date'
    },
};

class Exchange extends Realm.Object {}
Exchange.schema = {
    name: 'Exchange',
    primaryKey: 'id',
    properties: {
        id: {
            type: 'int',
            default: 0
        },
        name: {
            type: 'string',
            indexed: true
        },
        coins: 'Coin[]',
    },
};

class Coin extends Realm.Object {}
Coin.schema = {
    name: 'Coin',
    primaryKey: 'id',
    properties: {
        id: {
            type: 'int',
            default: 0
        },
        exchange: 'Exchange',
        symbol: 'string',
        name: {
            type: 'string',
            indexed: true
        },
        price: 'float',
    },
};

export default new Realm({schema: [Portfolio, PortfolioItem, Transaction, Coin, Exchange]});