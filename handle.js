const send = require('./send');
const event = require('./event');
const find = require('./find');

module.exports = {
    text: (ctx, txt) => {
        const words = txt.split(' ');
        let relation = words[0];
        let username = words[1];
        words.splice(0, 2);
        let comment = words.join(' ');
        if (!comment) {
            comment = "без комментариев";
        }
        switch (relation) {
            case '/start':
                event.start(ctx.from.username);
                send(ctx, 'Здравствуйте, Сеть Доверия позволяет проверить пользователя телеграм и определить его репутацию среди тех, кому вы доверяете. Чтобы получить инфомрацию об аккаунтах сначала добавьте всех, кому вы доверяете, для этого используйте команду\n+ @username комментарий в свободной форме о причинах доверия и степени доверия\nесли вы хотите предупредить о том что пользователю доверять нельзя используйте команду\n- @username комментарий в свободной форме о причинах и степени недоверия\nУчтите, что при проверке репутации учитывается мнение только тех людей кому Вы доверяете и тех кому доверяют они, по цепочке. Такая система полностью исключает возможность накрутки как с нашей стороны, так и со стороны третьих лиц, ботоводов и накрутчиков. Поэтому Сеть Доверия позволяет получить максимально точную информацию. Для полного Списка команд и более подброного описания используйте команду /help. Задать вопросы и обсудить работу бота можно в группе https://t.me/joinchat/AdNTOUd4Nhi1i8kpSJUiog.');
                break;
            case '/help':
                send(ctx, 'Чтобы обозначить доверие аккаунты наберите "+", затем его юзернейм и комментарий в свободной форме, например\n+ @username неоднакратно отправлял господину Смакову предоплату, товар всегда получал в срок в полном объеме, соотвествующего качества\nЕсли же Вы хотите предупретить тех, кто вам доверяет о том, что определенному аккаунту нельзя доверять, то наберите "-", затем его юзернейм и затем комментарий в свободной форме, например\n- @username затянул работу на 3 месяца, средства не вернул, работу толком так и не выполнил\nДля проверки репутации пользователя просто наберите его юзернейм, @username\nПри возникновении вопросов пишите в нашу группу https://t.me/joinchat/AdNTOUd4Nhi1i8kpSJUiog');
                break;
            case '+':
                if (username) {
                    if (username[0] == '@' && username.length > 5) {
                        event.relation(ctx.from.username, username.slice(1), comment, '+')
                        send(ctx, 'Теперь Вы доверяете ' + username + ' с комментарием "' + comment + '"');
                    } else {
                        send(ctx, "Некорректный юзернейм");
                    }
                } else {
                    send(ctx, 'Необходимо указать юзернейм');
                }
                break;
            case '-':
                if (username) {
                    if (username[0] == '@' && username.length > 5) {
                        event.relation(ctx.from.username, username.slice(1), comment, '-')
                        send(ctx, "Теперь Вы НЕ доверяете " + username + ' с комментарием "' + comment + '"');
                    } else {
                        send(ctx, "Некорректный юзернейм");
                    }
                } else {
                    send(ctx, 'Необходимо указать юзерней');
                }
                break;
            case '0':
                if (username) {
                    if (username[0] == '@' && username.length > 5) {
                        event.relation(ctx.from.username, username.slice(1), false, '0')
                        send(ctx, "Теперь Вы нейтрально относитесь к " + username);
                    } else {
                        send(ctx, "некорректный юзернейм");
                    }
                } else {
                    send(ctx, 'Необходимо указать юзерней');
                }
                break;
            default:
                if (relation[0] == '@' && relation.length > 5) {
                    let answer = find.findPath(ctx.from.username, relation.slice(1));
                    // let answer = find.f(ctx.from.username, relation.slice(1));
                    // console.log(answer);
                    if (answer == 'self') {
                        send(ctx, '@' + ctx.from.username + ' можно доверять как себе');
                    } else if (answer) {
                        let text = '';
                        text += '@' + answer[0].username;
                        // console.log(answer[0])
                        if (answer[0].relation == '+') {
                            text += " можно доверять"
                        } else {
                            text += " НЕЛЬЗЯ доверять!"
                        }
                        for (let a in answer) {
                            text += '\n';
                            a = parseInt(a);
                            if (a == answer.length - 1) {
                                text += '@' + answer[a].username + " <= Вы"
                            } else {
                                text += '@' + answer[a].username + " <= @" + answer[a + 1].username;
                            }
                            text += '\n';
                            text += answer[a].comment;
                        }
                        send(ctx, text);
                        // send(ctx, answer);
                        // let text = '@';
                        // text += answer.path[answer.path.length - 1].obj;
                        // if(answer.path[answer.path.length - 1].relation=='+'){
                        //     text += " можно доверять"
                        // }else{
                        //     text += " НЕЛЬЗЯ доверять!"
                        // }
                        // send(ctx, text);

                        // // console.log(answer.path.reverse());
                        // for (let a in answer.path.reverse()) {
                        //     a = parseInt(a);
                        //     let from;
                        //     if (a == answer.path.length - 1) {
                        //         from = " <= Вы"
                        //     } else {
                        //         from = " <= @" + answer.path[a + 1].obj;
                        //     }
                        //     text = '@'
                        //     text += answer.path[a].obj
                        //     text += from;
                        //     send(ctx, text);
                        //     text = answer.path[a].comment;
                        //     send(ctx, text);
                    } else {
                        send(ctx, "Для построения цепочки доверия необходимо добавить больше пользователей, которым вы доверяете.\nЧтобы реже видеть эту ошибку, обозначьте свое доверие ко всем, кому вы доверяете командой\n+ @username\nи попросите их указать, кому доверяют они.")
                    }
                } else {
                    send(ctx, "некорректный юзернейм");
                }
                break;
        }

    }
}