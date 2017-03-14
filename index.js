/**
 * Created by Tristan on 17/3/14.
 */
const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', function (client) {
    client.on('event', function (data) {
    });
    client.on('disconnect', function () {
    });
});
module.exports = server