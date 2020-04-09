const bot = require('./bot');

module.exports = (id, text) => {
    bot.sendMessage(id, text);
}