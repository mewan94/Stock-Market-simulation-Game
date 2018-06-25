
const APIGame= 'https://sm-stockmarket.herokuapp.com/api/';
//const APIGame= 'https://c1c68470.ngrok.io/api/';
const APIBank= 'https://sm-bank.herokuapp.com/api/';
module.exports = {

    ROUTES: {
        SOCKET: 'https://sm-stockmarket.herokuapp.com/',
        CREATE_PLAYER: APIBank + 'player/',
        CREATE_GAME: APIGame + 'game/',
        JOIN_GAME: APIGame + 'game/',
        JOIN_EXISTING_GAME: APIGame + 'game/',
        START_GAME: APIGame + 'game/'
    }

};