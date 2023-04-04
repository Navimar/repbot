const bot = require('./bot');
const handle = require('./handle');
const send = require('./send');
const event = require('./event');
const save = require('./save');

let input = {};

input.bot = () => {
  bot.on('text', async (ctx) => {
    const msg = ctx.message;
    let res = handle.text(msg);
    await Promise.all(res.send.map(e => send(e.id, e.text)));
    await Promise.all(res.event.map(e => save(event[e.name].apply(this, e.arg))));
  });
};

module.exports = input;