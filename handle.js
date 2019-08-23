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
                send(ctx, "Однако описание бота!");
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
                        if (answer[0].relation=='+') {
                            text += " можно доверять"
                        } else {
                            text += " НЕЛЬЗЯ доверять!"
                        }
                        send(ctx, text);
                        for (let a in answer) {
                            a = parseInt(a);
                            if (a == answer.length - 1) {
                                text = '@' + answer[a].username + " <= Вы"
                            } else {
                                text = '@' + answer[a].username + " <= @" + answer[a + 1].username;
                            }
                            send(ctx, text);
                            text = answer[a].comment;
                            send(ctx, text);
                        }
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
                        send(ctx, "мало данных, добавьте больше людей кому вы доверяете")
                    }
                } else {
                    send(ctx, "некорректный юзернейм");
                }
                break;
        }

    }
}