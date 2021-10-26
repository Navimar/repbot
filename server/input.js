const bot = require('./bot');
const handle = require('./handle');
const send = require('./send');
const event = require('./event');
const save = require('./save');

let input = {};

input.bot = () => {
  bot.on('text', msg => {
    let res = handle.text(msg);
    res.send.forEach(e =>
      send(e.id, e.text));
    res.event.forEach(e =>
      save(event[e.name].apply(this, e.arg))
    );
  });
};

module.exports = input;