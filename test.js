const handle = require('./handle');
let n = 0;
let m = 1;
let results = [];
module.exports = {
  start: () => {
    let Reply = function (author) {
      this.sendtext = (text) => {
        // console.log(">", text)
        results[n] = text;
        n++;
      }
    }
    let message = (author, text, answer) => {
      let c = n;
      // console.log(author + ":", text)
      handle.text({ from: { username: author }, reply: new Reply(author).sendtext, }, text);
      if (answer) {
        answer.forEach(e => {
          if (e != results[c]) {
            console.log(m + '', results[c], '!=', e)
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
    message('Happycatfish', '/start', ['Однако описание бота!']);
    message('Happycatfish', '@Happycatfish', ['@Happycatfish можно доверять как себе']);
    message('Happycatfish', '+ @test983475 честный человек, мой бро', ['Теперь Вы доверяете @test983475 с комментарием "честный человек, мой бро"']);
    message('Happycatfish', '+ @test картошечка', ['Некорректный юзернейм']);
    message('Happycatfish', '+ картошечка', ['Некорректный юзернейм']);
    message('Happycatfish', '+ ', ['Необходимо указать юзернейм']);
    message('Happycatfish', '+ @test234513 "использовал кавычки"', ['Теперь Вы доверяете @test234513 с комментарием ""использовал кавычки""']);
    message('Happycatfish', '+ @nocomment', ['Теперь Вы доверяете @nocomment с комментарием "без комментариев"']);
    message('Happycatfish', '0 @nocomment', ['Теперь Вы нейтрально относитесь к @nocomment']);
    message('Happycatfish', '@test983475', '@test983475 можно доверять%@test983475 <= Вы%честный человек, мой бро'.split('%'));
    message('test983475', '+ @testMakarbodar commentт');
    message('Happycatfish', '@testMakarbodar', '@testMakarbodar можно доверять%@testMakarbodar <= @test983475%commentт%@test983475 <= Вы%честный человек, мой бро'.split('%'));
  }
}

