const message = require('./test');

module.exports = () => {
    // message('Happycatfish', '@testMakarbodar', '@testMakarbodar можно доверять\n@testMakarbodar <= @test983475\ncommentт\n@test983475 <= Вы\nчестный человек, мой бро');
    message('Happycatfish', '/start','Здравствуйте, Сеть Доверия позволяет проверить пользователя телеграм и определить его репутацию среди тех, кому вы доверяете. Чтобы получить инфомрацию об аккаунтах сначала добавьте всех, кому вы доверяете, для этого используйте команду\n+ @username комментарий в свободной форме о причинах доверия и степени доверия\nесли вы хотите предупредить о том что пользователю доверять нельзя используйте команду\n- @username комментарий в свободной форме о причинах и степени недоверия\nУчтите, что при проверке репутации учитывается мнение только тех людей кому Вы доверяете и тех кому доверяют они, по цепочке. Такая система полностью исключает возможность накрутки как с нашей стороны, так и со стороны третьих лиц, ботоводов и накрутчиков. Поэтому Сеть Доверия позволяет получить максимально точную информацию. Для полного Списка команд и более подброного описания используйте команду /help. Задать вопросы и обсудить работу бота можно в группе https://t.me/joinchat/AdNTOUd4Nhi1i8kpSJUiog.');
    message('Happycatfish', '/help','Чтобы обозначить доверие аккаунты наберите "+", затем его юзернейм и комментарий в свободной форме, например\n+ @username неоднакратно отправлял господину Смакову предоплату, товар всегда получал в срок в полном объеме, соотвествующего качества\nЕсли же Вы хотите предупретить тех, кто вам доверяет о том, что определенному аккаунту нельзя доверять, то наберите "-", затем его юзернейм и затем комментарий в свободной форме, например\n- @username затянул работу на 3 месяца, средства не вернул, работу толком так и не выполнил\nДля проверки репутации пользователя просто наберите его юзернейм, @username\nПри возникновении вопросов пишите в нашу группу https://t.me/joinchat/AdNTOUd4Nhi1i8kpSJUiog');    
    message('Happycatfish', '@Happycatfish', '@Happycatfish можно доверять как себе');
    message('Happycatfish', '+ @test983475 честный человек, мой бро', 'Теперь Вы доверяете @test983475 с комментарием "честный человек, мой бро"');
    message('Happycatfish', '+ @test картошечка', 'Некорректный юзернейм');
    message('Happycatfish', '+ картошечка', 'Некорректный юзернейм');
    message('Happycatfish', '+ ', 'Необходимо указать юзернейм');
    message('Happycatfish', '+ @nocomment', 'Теперь Вы доверяете @nocomment с комментарием "без комментариев"');
    message('Happycatfish', '0 @nocomment', 'Теперь Вы нейтрально относитесь к @nocomment');
    message('Happycatfish', '@nocomment', 'Для построения цепочки доверия необходимо добавить больше пользователей, которым вы доверяете.\nЧтобы реже видеть эту ошибку, обозначьте свое доверие ко всем, кому вы доверяете командой\n+ @username\nи попросите их указать, кому доверяют они.');
    message('Happycatfish', '@test983475', '@test983475 можно доверять\n@test983475 <= Вы\nчестный человек, мой бро');
    message('test983475', '+ @testMakarbodar commentт');
    message('test983475', '- @badperson i dont like him', 'Теперь Вы НЕ доверяете @badperson с комментарием "i dont like him"');
    message('newnewnew', '- @badperson i dont like him', 'Теперь Вы НЕ доверяете @badperson с комментарием "i dont like him"');
    message('newnewnew', '@badperson не нужный коммент', '@badperson НЕЛЬЗЯ доверять!\n@badperson <= Вы\ni dont like him');
    message('Happycatfish', '@testMakarbodar', '@testMakarbodar можно доверять\n@testMakarbodar <= @test983475\ncommentт\n@test983475 <= Вы\nчестный человек, мой бро');
    message('testMakarbodar', '+ @thirdy nice guy, love him');
    message('Happycatfish', '@thirdy', '@thirdy можно доверять\n@thirdy <= @testMakarbodar\nnice guy, love him\n@testMakarbodar <= @test983475\ncommentт\n@test983475 <= Вы\nчестный человек, мой бро');
    message('randomuser', '@unknownuser', 'Для построения цепочки доверия необходимо добавить больше пользователей, которым вы доверяете.\nЧтобы реже видеть эту ошибку, обозначьте свое доверие ко всем, кому вы доверяете командой\n+ @username\nи попросите их указать, кому доверяют они.');
    message('Happycatfish', '+ @jim8012 отзыв от jim',);
    message('jim8012', '+ @Happycatfish отзыв от Happycatfish',);
    message('jim8012','@maxjaja','Для построения цепочки доверия необходимо добавить больше пользователей, которым вы доверяете.\nЧтобы реже видеть эту ошибку, обозначьте свое доверие ко всем, кому вы доверяете командой\n+ @username\nи попросите их указать, кому доверяют они.');
    message('Happycatfish', '@Happycatfish', '@Happycatfish можно доверять как себе');
}