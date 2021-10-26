const event = require('./event');
const handle = require('./handle');
let n = 0;
let m = 1;
let results = [];
let lastauthor = 'Happycatfish';
let lasttext = '/start';

let message = (author, text, answer) => {
  let c = n;
  let results = handle.text({ from: { username: author }, text });

  results.event.forEach(e => {
    event[e.name].apply(this, e.arg)
  }
  );

  if (answer) {
    if (!Array.isArray(answer)) {
      answer = [answer];
    }
    answer.forEach(e => {
      // console.log('hi',  results.send[c].text);
      if (e != results.send[c].text) {
        if (author !== lastauthor || text !== lasttext) {
          console.log(author + ":", text)
          lastauthor = author;
          lasttext = text;
        }
        // console.log( author, text, results[c], '!=', e)
        console.log(c + '\n' + results.send[c].text + '\n!=\n' + e)
      }
      c++
    });
    // for (let a = 0; c < n; c++) {
    //     if (answer[a] != results[c]) {
    //         console.log(m + '', results[c], '!=', answer[a])
    //     }
    //     a++;
    // }
  }
  m++;
}

module.exports = message;

  // }
// }

