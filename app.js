const input = require('./input.js')
const bot = require('./bot.js')
const event = require('./event.js')
const test = require('./test.js')

test.start();
input.init();
event.start();