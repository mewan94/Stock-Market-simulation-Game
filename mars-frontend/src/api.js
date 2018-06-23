import openSocket from 'socket.io-client';
import ROUTES from '../src/config/server';
//const socket = openSocket(ROUTES.ROUTES.SOCKET);

/*function subscribeToTimer(cb) {
    console.log('asdfsd')
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.on('test', data => console.log(data));
    socket.emit('subscribeToTimer', 3000);
}*/

function startGameSoc (gameId,getUser){
    const socket = openSocket(ROUTES.ROUTES.SOCKET);
    /*socket.on("joinGame",function (data) {

    })*/
    socket.emit("joinGame",{gameid:gameId, token: localStorage.getItem('userToken')})
    socket.on('startGame', function (data) {
        console.log(data)
    })
    socket.on('playerJoin',function (data) {
        getUser(data);
        console.log('playerjsin',data)
    })

}



/*function test(cb) {
    socket.on('join',function (data) {
        socket.emit('join','123',(d) => {console.log(d)});
        console.log(data);
    });
}*/

export { startGameSoc }
