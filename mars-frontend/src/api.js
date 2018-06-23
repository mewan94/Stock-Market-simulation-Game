import openSocket from 'socket.io-client';
import ROUTES from '../src/config/server';
//const socket = openSocket(ROUTES.ROUTES.SOCKET);
const socket = openSocket('http://localhost:4200');

function subscribeToTimer(cb) {
    console.log('asdfsd')
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.on('test', data => console.log(data));
    socket.emit('subscribeToTimer', 3000);
}

function test(cb) {
    socket.on('join',function (data) {
        socket.emit('join','123',(d) => {console.log(d)});
        console.log(data);
    });
}
export { subscribeToTimer, test }