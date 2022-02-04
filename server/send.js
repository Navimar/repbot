const bot = require('./bot');

module.exports = (id, text) => {
    if (id)
        bot.sendMessage(id, text);
}