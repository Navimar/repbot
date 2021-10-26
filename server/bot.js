const TelegramBot = require('telebot');
const config = require('./config');

const bot = new TelegramBot(config.botkey);
bot.connect();
module.exports = bot;