/**
 * Created by Tristan on 17/3/15.
 */
const io = require('socket.io-client');
    const socket = io('http://::1/chat');
    socket.on('connect', function () {
        console.log(`${socket.id} connect success`); // 'G5p5...'
        socket.send('hello')
    });


