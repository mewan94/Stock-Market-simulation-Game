
const APIGame= 'https://sm-stockmarket.herokuapp.com/api/';
const APIBank= 'https://sm-bank.herokuapp.com/api/';
const APIBroker = '';
module.exports = {

    ROUTES: {
        SOCKET: 'https://sm-stockmarket.herokuapp.com/',
        CREATE_PLAYER: APIBank + 'player/',
        CREATE_GAME: APIGame + 'game/',
        JOIN_GAME: APIGame + 'game/',
        JOIN_EXISTING_GAME: APIGame + 'game/',
        START_GAME: APIGame + 'game/',

        BUY_STOCKS: APIBroker + 'buy/',
        SELL_STOCKS: APIBroker + 'sell',
    }

};