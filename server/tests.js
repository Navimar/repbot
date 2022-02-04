const message = require('./test');
const user = require('./user');


module.exports = () => {
    console.log("============= tests start =================");
    //тест чтения сохраненных данных
    message('Happycatfish', '@test983475', '@test983475 можно доверять\n@test983475 <= Вы\nчестный человек, мой бро');
    //теперь начинаем с чистого листа
    user.clear();
    message('', '0 @nocomment', 'Установите username, чтобы пользоваться ботом');
    message('Happycatfish', '0 @nocomment', 'Теперь Вы нейтрально относитесь к @nocomment');
    message('Happycatfish', '0 @nocomment', 'Теперь Вы нейтрально относитесь к @nocomment');
    message('Happycatfish', '0 @nocomment', 'Теперь Вы нейтрально относитесь к @nocomment');
    message('Happycatfish', '@nocomment', 'Для построения цепочки доверия необходимо добавить больше пользователей, которым вы доверяете.\nЧтобы реже видеть эту ошибку, обозначьте свое доверие ко всем, кому вы доверяете командой\n+ @username\nи попросите их указать, кому доверяют они.');
    user.clear();
    message('Happycatfish', "+@aaaaa двухстрочный\nкомметарий", 'Теперь Вы доверяете @aaaaa с комментарием "двухстрочный"');
    message('Happycatfish', '/start', "Здравствуйте, Сеть Доверия позволяет проверить пользователя Телеграма и определить его репутацию среди тех, кому вы доверяете. \n\nЧтобы получить информацию, сначала добавьте всех, кому вы доверяете. Для этого отправьте боту сообщение следующего вида:\n\n+ @username комментарий в свободной форме о причинах доверия и степени доверия\n\nЕсли вы хотите предупредить о том, что пользователю доверять нельзя, отправьте боту сообщение начинающееся с минуса:\n\n- @username комментарий в свободной форме о причинах и степени недоверия\n\nПри проверке репутации учитывается мнение только тех людей, кому вы доверяете, и тех, кому доверяют они, — по цепочке. Такая система полностью исключает возможность накрутки как с нашей стороны, так и со стороны третьих лиц, в том числе ботоводов и накрутчиков. Поэтому Сеть Доверия позволяет получить максимально точную информацию. \n\nДля полного Списка команд и более подробного описания используйте команду /help.\n\nЗадать вопросы и обсудить работу бота можно в группе @trustnetchat.");
    message('Happycatfish', '/help', "Чтобы обозначить доверие аккаунту наберите \"+\", затем его юзернейм и комментарий в свободной форме, например:\n+ @username неоднакратно отправлял господину Смакову предоплату, товар всегда получал в срок в полном объеме, соотвествующего качества\nЕсли же Вы хотите предупретить тех, кто вам доверяет о том, что определенному аккаунту нельзя доверять, то наберите \"-\", затем его юзернейм и затем комментарий в свободной форме, например:\n- @username затянул работу на 3 месяца, средства не вернул, работу толком так и не выполнил\nЧтобы изменить отношение обратно на нейтральное, наберите \"0\" и юзернейм пользователя, комментарий в данном случае не нужен.\n0 @username\nДля проверки репутации пользователя просто наберите его юзернейм \n@username\nВы можете отправить боту сразу несколько команд одним сообщением. Для этого каждую команду начните с новой строки, например:\n+ @username\n- @anotheruser\nПри возникновении вопросов пишите в нашу группу @trustnetchat");
    message('Happycatfish', '@Happycatfish', '@happycatfish можно доверять как себе');
    message('Happycatfish', '+ @test983475 честный человек, мой   бро', 'Теперь Вы доверяете @test983475 с комментарием "честный человек, мой бро"');
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
    message('Happycatfish', '@testMakarbodar', '@testmakarbodar можно доверять\n@testmakarbodar <= @test983475\ncommentт\n@test983475 <= Вы\nчестный человек, мой бро');
    message('testMakarbodar', '+ @thirdy nice guy, love him');
    message('Happycatfish', '@thirdy', '@thirdy можно доверять\n@thirdy <= @testmakarbodar\nnice guy, love him\n@testmakarbodar <= @test983475\ncommentт\n@test983475 <= Вы\nчестный человек, мой бро');
    message('randomuser', '@unknownuser', 'Для построения цепочки доверия необходимо добавить больше пользователей, которым вы доверяете.\nЧтобы реже видеть эту ошибку, обозначьте свое доверие ко всем, кому вы доверяете командой\n+ @username\nи попросите их указать, кому доверяют они.');
    message('Happycatfish', '+ @jim8012 отзыв от jim');
    message('jim8012', '+ @Happycatfish отзыв от Happycatfish');
    message('jim8012', '@maxjaja', 'Для построения цепочки доверия необходимо добавить больше пользователей, которым вы доверяете.\nЧтобы реже видеть эту ошибку, обозначьте свое доверие ко всем, кому вы доверяете командой\n+ @username\nи попросите их указать, кому доверяют они.');
    message('Happycatfish', '@Happycatfish', '@happycatfish можно доверять как себе');
    message('aryadovoy', '+@aryadovoy Прежде всего нужно любить себя :)', 'Место для смешной шутки про самолюбие');
    message('aryadovoy', '+ @Happycatfish Великодушный!');
    message('aryadovoy', '@Happycatfish', '@happycatfish можно доверять\n@happycatfish <= Вы\nВеликодушный!');
    message('Happycatfish', '+ @kokokokol кокококококууриицу');
    message('kokokokol', '- @krolodol нехороший чееловек', 'Теперь Вы НЕ доверяете @krolodol с комментарием "нехороший чееловек"');
    message('Happycatfish', '@krolodol', '@krolodol НЕЛЬЗЯ доверять!\n@krolodol <= @kokokokol\nнехороший чееловек\n@kokokokol <= Вы\nкокококококууриицу');
    message('krolodol', '+ @krolodoladrug мой собутыльник', 'Теперь Вы доверяете @krolodoladrug с комментарием "мой собутыльник"');
    message('aaaaa', '+ @bbbbb', 'Теперь Вы доверяете @bbbbb с комментарием "без комментариев"')
    message('bbbbb', '+ @ccccc', 'Теперь Вы доверяете @ccccc с комментарием "без комментариев"')
    message('aaaaa', '+ @ababab', '')
    message('ababab', '- @ccccc', '')
    message('aaaaa', ' @ccccc', '@ccccc НЕЛЬЗЯ доверять!\n@ccccc <= @ababab\nбез комментариев\n@ababab <= Вы\nбез комментариев')
    user.clear();
    message('aaaaa', '+ @bbbbb',)
    message('bbbbb', '+ @ccccc',)
    message('ccccc', '+ @ddddd',)
    message('aaaaa', '+ @ddddd',)
    message('aaaaa', ' @ddddd', '@ddddd можно доверять\n@ddddd <= Вы\nбез комментариев');
    user.clear();
    message('testtest', "+@aaaaa комментарий для aaaaa\n+@bbbbb комментарий для bbbbb\n+@ccccc комментарий для ccccc\n+@ddddd комментарий для ddddd\n+@eeeee комментарий для eeeee\n+@fffff комментарий для fffff", "Теперь вы доверяете @aaaaa, @bbbbb, @ccccc, @ddddd, @eeeee, @fffff");
    user.clear();

}