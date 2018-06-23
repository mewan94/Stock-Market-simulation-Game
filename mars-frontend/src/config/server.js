const APIGame= 'http://192.168.137.185:8080/api/';
const APIBank= 'https://sm-bank.herokuapp.com/api/';
module.exports = {

    ROUTES: {
        SOCKET: 'localhost:8080/',
        PLAYER: APIBank + 'player/',
        GAME: APIGame + 'game/',
    }

};