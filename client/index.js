/**
 * Created by Tristan on 17/3/15.
 */
const io = require('socket.io-client');
const socket = io('http://localhost:8080/chat');

socket.on('connect', function () {
    console.log(`${socket.id} connect success`); // 'G5p5...'

    setInterval(()=>{
        socket.send('hello')
    },1000)
});