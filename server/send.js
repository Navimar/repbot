const bot = require('./bot');

module.exports = (id, text) => {
    if (id) {
        bot.telegram.sendMessage(id, text);
    }
}