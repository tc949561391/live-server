/**
 * Created by Tristan on 17/3/15.
 */
const logI = require('log4js').getLogger('info')
let i = 0;
module.exports = (chat) => {
    chat.on('connection', (socket) => {
        i++
        logI.info(`namespace/chat/index.js --> ${socket.id} connect to /chat namespace`)
        console.log(i)
        socket.on('message', (message) => {
            logI.info(`namespace/chat/index.js --> ${socket.id} send [${message}] message`)
        })

        socket.on('disconnect', () => {
            logI.info(`namespace/chat/index.js --> ${socket.id} disconnect`)

        })


        socket.on('ping', () => {
            logI.info(`ping`)
        })

    })

}