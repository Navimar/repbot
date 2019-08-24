const input = require('./input.js')
const bot = require('./bot.js')
const event = require('./event.js')
const test = require('./tests.js')

test();
input.init();
event.start();