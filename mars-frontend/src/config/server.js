
const APIGame= 'https://sm-stockmarket.herokuapp.com/api/';
const APIBank= 'https://sm-bank.herokuapp.com/api/';
const APIBroker = 'https://sm-broker.herokuapp.com/api/';
module.exports = {

    ROUTES: {
        SOCKET: 'https://sm-stockmarket.herokuapp.com/',
        JOIN_URL: 'http://localhost:3001/join/',
        CREATE_PLAYER: APIBank + 'player/',
        CREATE_GAME: APIGame + 'game/',
        JOIN_GAME: APIGame + 'game/',
        JOIN_EXISTING_GAME: APIGame + 'game/',
        START_GAME: APIGame + 'game/',

        BUY_STOCKS: APIBroker + 'broker/buy/',
        SELL_STOCKS: APIBroker + 'broker/sell',
    }

};