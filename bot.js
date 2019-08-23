const config = require('./config');
const Telegraf = require('telegraf')
const bot = new Telegraf(config.bottoken);

console.log('bot started!');

module.exports = bot;