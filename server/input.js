const bot = require('./bot');
const handle = require('./handle');
const send = require('./send');
const event = require('./event');

let input = {};

input.bot = () => {
  bot.on('text', msg => {
    // console.log(msg);
    let res = handle.text(msg);
    res.send.forEach(e =>
      send(e.id,e.text));
    res.event.forEach(e =>
      event[e.name].apply(this, e.arg)
    );
  });
};

module.exports = input;