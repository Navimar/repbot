const bot = require('./bot');
const handle = require('./handle');

let input = {};

input.bot = () => {
  bot.on('text', msg => {
    // console.log(msg);
    handle.text(msg);
  });
};

module.exports = input;