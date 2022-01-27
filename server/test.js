const event = require('./event');
const handle = require('./handle');
let m = 1;
let lastauthor = 'Happycatfish';
let lasttext = '/start';

let message = (author, text, answer) => {
  let c = 0;
  let results = handle.text({ from: { username: author }, text });

  results.event.forEach(e => {
    event[e.name].apply(this, e.arg)
  }
  );

  let print = true;

  if (answer) {
    if (!Array.isArray(answer)) {
      answer = [answer];
    }
    answer.forEach(e => {
      if (e != results.send[c].text) {
        console.log(m, '---------------------');
        if (author !== lastauthor || text !== lasttext) {
          if (print) console.log(author + ":", text)
          lastauthor = author;
          lasttext = text;
        }
        if (print) console.log('\n' + results.send[c].text + '\n!=\n' + e)
        m++;
      }
      c++
    });
  }
}

module.exports = message;
