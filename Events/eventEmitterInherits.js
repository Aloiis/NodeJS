const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const united = new Character('United')

united.on('help', () => console.log(`Me! ${united.name}!!!`))

console.log('Who can save us now')
united.emit('help')