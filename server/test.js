const handle = require('./handle');
let n = 0;
let m = 1;
let results = [];
let lastauthor = 'Happycatfish';
let lasttext = '/start';
// module.exports = {
// start: () => {
let Reply = function (author) {
  this.sendtext = (text) => {
    // console.log(">", text)
    results[n] = text;
    n++;
  }
}
let message = (author, text, answer) => {
  let c = n;
  handle.text({ from: { username: author }, reply: new Reply(author).sendtext, }, text);

  if (answer) {
    if (!Array.isArray(answer)) {
      answer = [answer];
    }
    answer.forEach(e => {
      if (e != results[c]) {
        if (author !== lastauthor || text !== lasttext) {
          console.log(author + ":", text)
          lastauthor = author;
          lasttext = text;
        }
        // console.log( author, text, results[c], '!=', e)
        console.log(c + '\n' + results[c] + '\n!=\n' + e)
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

