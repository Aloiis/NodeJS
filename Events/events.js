const { EventEmitter } = require('events')

const ev = new EventEmitter()

ev.on('saysomething', () => {
    console.log('Im listening')
})

ev.emit('saysomething')