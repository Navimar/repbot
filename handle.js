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
                        event.trust(ctx.from.username, username.slice(1), comment)
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
                        event.distrust(ctx.from.username, username, comment)
                        send(ctx, "теперь Вы НЕ доверяете " + username + " с комментарием " + comment);
                    } else {
                        send(ctx, "некорректный юзернейм");
                    }
                } else {
                    send(ctx, 'need to target user');
                }
                break;
            case '0':
                if (username) {
                    if (username[0] == '@' && username.length > 5) {
                        event.neutral(ctx.from.username, username)
                        send(ctx, "Теперь Вы нейтрально относитесь к " + username);
                    } else {
                        send(ctx, "некорректный юзернейм");
                    }
                } else {
                    send(ctx, 'need to target user');
                }
                break;
            default:
                if (relation[0] == '@' && relation.length > 5) {
                    let answer = find.findPath(ctx.from.username, relation.slice(1));
                    // send(ctx, "ПРОВЕРКА " + ctx.from.username + " " + relation.slice(1));
                    // answer.forEach(e => {
                    // send(ctx, 'хоп');
                    if (answer == 'self') {
                        send(ctx, '@' + ctx.from.username + ' можно доверять как себе');
                    } else if (answer) {
                        // send(ctx, answer);
                        let text = '@';
                        text += answer.path[answer.path.length - 1].obj;
                        text += " можно доверять"
                        send(ctx, text);
                        // console.log(answer.path.reverse());
                        for (let a in answer.path.reverse()) {
                            a = parseInt(a);
                            let from;
                            if (a == answer.path.length-1) {
                                from = " <= Вы"
                            } else {
                                from = " <= @"+answer.path[a+1].obj;
                            }
                            text = '@'
                            text += answer.path[a].obj
                            text += from;
                            send(ctx, text);
                            text = answer.path[a].comment;
                            send(ctx, text);
                        }
                    }
                    // });
                } else {
                    send(ctx, "некорректный юзернейм");
                }
                break;

        }

    }
}