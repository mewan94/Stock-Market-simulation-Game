const APIGame= 'http://192.168.8.100:8080/api/';
const APIBank= 'https://sm-bank.herokuapp.com/api/';
module.exports = {

    ROUTES: {
        SOCKET: 'http://192.168.8.100:8080/',
        PLAYER: APIBank + 'player/',
        GAME: APIGame + 'game/',
    }

};