const message = require('./test');

module.exports = () => {
    message('Happycatfish', '/start','Однако описание бота!');
    message('Happycatfish', '@Happycatfish', '@Happycatfish можно доверять как себе');
    message('Happycatfish', '+ @test983475 честный человек, мой бро', ['Теперь Вы доверяете @test983475 с комментарием "честный человек, мой бро"']);
    message('Happycatfish', '+ @test картошечка', ['Некорректный юзернейм']);
    message('Happycatfish', '+ картошечка', ['Некорректный юзернейм']);
    message('Happycatfish', '+ ', ['Необходимо указать юзернейм']);
    message('Happycatfish', '+ @test234513 "использовал кавычки"', ['Теперь Вы доверяете @test234513 с комментарием ""использовал кавычки""']);
    message('Happycatfish', '+ @nocomment', ['Теперь Вы доверяете @nocomment с комментарием "без комментариев"']);
    message('Happycatfish', '0 @nocomment', ['Теперь Вы нейтрально относитесь к @nocomment']);
    message('Happycatfish', '@test983475', ['@test983475 можно доверять\n@test983475 <= Вы\nчестный человек, мой бро']);
    message('test983475', '+ @testMakarbodar commentт');
    message('test983475', '- @badperson i dont like him', ['Теперь Вы НЕ доверяете @badperson с комментарием "i dont like him"']);
    message('newnewnew', '- @badperson i dont like him', ['Теперь Вы НЕ доверяете @badperson с комментарием "i dont like him"']);
    message('newnewnew', '@badperson не нужный коммент', '@badperson НЕЛЬЗЯ доверять!\n@badperson <= Вы\ni dont like him');
    message('Happycatfish', '@testMakarbodar', '@testMakarbodar можно доверять\n@testMakarbodar <= @test983475\ncommentт\n@test983475 <= Вы\nчестный человек, мой бро');
    message('testMakarbodar', '+ @thirdy nice guy, love him');
    message('Happycatfish', '@thirdy', '@thirdy можно доверять\n@thirdy <= @testMakarbodar\nnice guy, love him\n@testMakarbodar <= @test983475\ncommentт\n@test983475 <= Вы\nчестный человек, мой бро');
}