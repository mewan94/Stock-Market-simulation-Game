import openSocket from 'socket.io-client';
import ROUTES from '../src/config/server';
const socket = openSocket(ROUTES.ROUTES.SOCKET);

function subscribeToTimer(cb) {
    console.log('asdfsd')
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.on('test', data => console.log(data));
    socket.emit('subscribeToTimer', 3000);
}

export { subscribeToTimer }