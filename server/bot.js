const { Telegraf } = require('telegraf');
const config = require('./config');

const bot = new Telegraf(config.botkey);
bot.launch();
module.exports = bot;
