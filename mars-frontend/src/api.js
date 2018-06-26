import openSocket from 'socket.io-client';
import ROUTES from '../src/config/server';
function startGameSoc (gameId,getUser){
    const socket = openSocket(ROUTES.ROUTES.SOCKET);

    socket.emit("joinGame",{gameid:gameId, token: localStorage.getItem('userToken')});
    socket.on('gameStart', function (data) {
        console.log(data)
        getUser(data);
    });

    socket.on('playerJoin',function (data) {
        getUser(data);
        console.log('playerjsin',data)
    });

    socket.on('startTurn',function (data) {
        getUser(data);
        console.log(data)
    });

    socket.on('end',function (data) {
        getUser(data);
        console.log(data)
    })
}


export { startGameSoc }
